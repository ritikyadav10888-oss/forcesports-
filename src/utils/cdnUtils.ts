/**
 * Generates a Statically.io CDN URL for a file hosted on GitHub.
 * 
 * @param localPath - The local path to the file (e.g., '/New folder/ppt 1/red.png')
 * @param options - Transformation options like width and quality
 * @returns The optimized CDN URL
 */
export const getCDNUrl = (localPath: string, options: { width?: number; quality?: number } = {}) => {
  if (!localPath) return '';
  
  // If it's already a full URL, return it
  if (localPath.startsWith('http')) return localPath;

  // During development, serve from local public folder
  // @ts-ignore - Vite env variable or localhost check
  if ((typeof import.meta !== 'undefined' && import.meta.env?.DEV) || 
      (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))) {
    return localPath;
  }

  // GitHub Repository details
  const USER = 'ritikyadav10888-oss';
  const REPO = 'forcesports-';
  const BRANCH = 'main';

  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // Statically.io URL pattern: https://cdn.statically.io/gh/:user/:repo/:tag/:path
  // In our Vite project, images used in data are in the 'public' directory
  const encodedPath = encodeURIComponent(cleanPath).replace(/%2F/g, '/');
  const baseUrl = `https://cdn.statically.io/gh/${USER}/${REPO}/${BRANCH}/public/${encodedPath}`;

  // Add transformations (WebP conversion is automatic by Statically if requested)
  const params = new URLSearchParams();
  if (options.width) params.append('w', options.width.toString());
  params.append('f', 'auto'); // Auto-format (WebP/AVIF depending on browser)
  
  const queryString = params.toString();
  const finalUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
  
  // Debug log to trace CDN transformations
  console.log(`[CDN] ${localPath} -> ${finalUrl}`);
  
  return finalUrl;
};
