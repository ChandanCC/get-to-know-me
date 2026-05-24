/**
 * Prepends the GitHub Pages basePath to public asset paths.
 *
 * Next.js <Image> does NOT inject basePath into static-export HTML.
 * Use this helper for every <img src> that references /public.
 *
 * Dev  (NODE_ENV=development): returns path as-is  → /logo.svg
 * Prod (NODE_ENV=production) : prepends basePath   → /get-to-know-me/logo.svg
 */
const BASE = process.env.NODE_ENV === "production" ? "/get-to-know-me" : "";

export const asset = (path: string): string => `${BASE}${path}`;
