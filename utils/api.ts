import WPAPI from 'wpapi';

export const blogUrl = process.env.KATA_BLOG_URL || 'https://blog.kata.ai';
export const endpoint = process.env.KATA_BLOG_WP_URL || 'https://wp.kata.ai';

const api = new WPAPI({ endpoint: `${endpoint}/wp-json` });

export default api;

/**
 * Fallback method to the API function above.
 *
 * @param namespace The API namespace, e.g. `wp/v2`
 * @param baseUrl The request path, beginning with `/`.
 */
export const getRootApi = (headers?: { [key: string]: any }): Promise<any> =>
  fetch(`${endpoint}/wp-json`, headers).then(res => res.json());

/**
 * Fallback method to the API function above.
 *
 * @param namespace The API namespace, e.g. `wp/v2`
 * @param baseUrl The request path, beginning with `/`.
 */
export const fallbackApi = (
  namespace: string = 'wp/v2',
  baseUrl: string,
  locale?: string,
  headers?: { [key: string]: any }
): Promise<any> => {
  const url = `${endpoint}${locale ? `/${locale}` : ''}/wp-json${
    namespace ? `/${namespace}` : ''
    }${baseUrl}`;

  return fetch(url, headers).then(res => res.json());
};
