import { FreshContext } from "$fresh/server.ts"

export const handler = (_req: Request, _ctx: FreshContext): Response => {
	const data = [{
		records: 0,
		uid: 'users', 
	}]

	const body = JSON.stringify(data, null, 2)
	return new Response(body)
};
