import { FreshContext } from "$fresh/server.ts"
import { faker } from "https://esm.sh/@faker-js/faker@8.4.1"
import lodash from "https://esm.sh/lodash@4.17.21"

const createUser = () => ({
	created: faker.date.anytime(),
	email: faker.internet.email(),
	uid: faker.string.uuid(),
})

const allUsers = lodash.times(10, createUser)

export const handler = (_req: Request, _ctx: FreshContext): Response => {
	const body = JSON.stringify(allUsers, null, 2)
	return new Response(body)
};
