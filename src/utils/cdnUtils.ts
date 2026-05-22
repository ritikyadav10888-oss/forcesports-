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

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return encodeURI(normalized);
};
