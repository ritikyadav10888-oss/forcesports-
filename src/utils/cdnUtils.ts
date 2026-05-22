import { localImageMap } from './localImageMap';

/**
 * Resolve image/asset URLs for dev and Firebase App Hosting.
 * Static files in /public are served from the same origin (no external CDN).
 */
export const getCDNUrl = (
  localPath: string,
  _options?: { width?: number; quality?: number }
): string => {
  if (!localPath?.trim()) return '';

  const path = localPath.trim();

  // Intercept Firebase Storage URLs that might fail due to payment/Spark plan limits
  if (path.includes('firebasestorage.googleapis.com')) {
    try {
      const parts = path.split('/o/');
      if (parts.length > 1) {
        const encodedPath = parts[1].split('?')[0];
        const decodedPath = decodeURIComponent(encodedPath);
        const filename = decodedPath.substring(decodedPath.lastIndexOf('/') + 1);
        
        // Strip timestamp prefix (e.g. 1779429973735_)
        const cleanFilename = filename.replace(/^\d+_/, '');
        
        // Look up in localImageMap
        const mapped = localImageMap[cleanFilename] || localImageMap[cleanFilename.toLowerCase()];
        if (mapped) {
          return encodeURI(mapped);
        }
      }
    } catch (e) {
      console.error('Failed to parse and map Firebase Storage URL, falling back to original URL', e);
    }
  }

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return encodeURI(normalized);
};

