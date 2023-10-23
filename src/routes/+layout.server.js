import { env } from '$env/dynamic/private';

export function load() {
	return { analyticsId: env.VERCEL_ANALYTICS_ID, googleAPIKey: env.GOOGLE_API_KEY };
}
