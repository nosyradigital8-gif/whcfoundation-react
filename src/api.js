const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'https://whcfoundation.com.ng/api').replace(/\/$/, '');

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}/${path.replace(/^\//, '')}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  let payload = null;
  try { payload = await response.json(); } catch { /* keep useful HTTP error below */ }
  if (!response.ok || payload?.success === false) {
    throw new Error(payload?.message || `API request failed (${response.status})`);
  }
  return payload;
}

export const api = {
  baseUrl: API_BASE,
  home: () => request('public/home.php'),
  blog: () => request('public/blog.php'),
  blogPost: (slug) => request(`public/blog_post.php?slug=${encodeURIComponent(slug)}`),
  gallery: () => request('gallery/public_list.php'),
  contact: (data) => request('contact.php', { method: 'POST', body: JSON.stringify(data) }),
  inquiry: (data) => request('inquiries/submit.php', { method: 'POST', body: JSON.stringify(data) }),
};

export function assetUrl(value) {
  if (!value) return '';
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  return value.startsWith('/') ? value : `${API_BASE.replace(/\/api$/, '')}/${value.replace(/^\//, '')}`;
}
