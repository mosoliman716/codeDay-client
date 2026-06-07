import axios from "axios";

const API_BASE = "http://localhost:3000/api";

export const api = axios.create({
	baseURL: API_BASE,
	withCredentials: true,
});

// helper to fetch CSRF token and set default header
async function fetchCsrfToken() {
	try {
		const res = await axios.get(`${API_BASE}/csrf-token`, { withCredentials: true });
		if (res?.data?.csrfToken) {
			api.defaults.headers.common["X-CSRF-Token"] = res.data.csrfToken;
		}
	} catch (err) {
		console.error('Failed to fetch CSRF token', err);
	}
}

// Ensure mutating requests have a CSRF token; fetch one if missing
api.interceptors.request.use(async (config) => {
	const method = (config.method || 'get').toLowerCase();
	const needsToken = ['post', 'put', 'patch', 'delete'].includes(method);
	if (needsToken && !api.defaults.headers.common['X-CSRF-Token']) {
		await fetchCsrfToken();
	}
	if (api.defaults.headers.common['X-CSRF-Token']) {
		config.headers['X-CSRF-Token'] = api.defaults.headers.common['X-CSRF-Token'];
	}
	return config;
});