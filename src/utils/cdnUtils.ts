/**
 * Generates a jsDelivr CDN URL for a file hosted on GitHub.
 * 
 * @param localPath - The local path to the file (e.g., '/New folder/ppt 1/red.png')
 * @param options - Transformation options (currently ignored by jsDelivr)
 * @returns The CDN URL
 */
export const getCDNUrl = (localPath: string, options: { width?: number; quality?: number } = {}) => {
  if (!localPath) return '';
  
  // If it's already a full URL, return it
  if (localPath.startsWith('http')) return localPath;

  // During development, serve from local public folder
  if ((typeof import.meta !== 'undefined' && process.env.NODE_ENV === 'development') || 
      (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))) {
    return localPath;
  }

  // GitHub Repository details
  const USER = 'ritikyadav10888-oss';
  const REPO = 'forcesports-';
  const BRANCH = 'main';

  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // jsDelivr URL pattern: https://cdn.jsdelivr.net/gh/:user/:repo@:branch/:path
  // In our Vite project, images used in data are in the 'public' directory
  const encodedPath = encodeURIComponent(cleanPath).replace(/%2F/g, '/');
  const finalUrl = `https://cdn.jsdelivr.net/gh/${USER}/${REPO}@${BRANCH}/public/${encodedPath}`;
  
  return finalUrl;
};

