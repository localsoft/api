import { faker } from "@faker-js/faker"
import { Handlers } from "$fresh/server.ts"
import lodash from "https://esm.sh/lodash@4.17.21"
import { User, Users } from "../../../data/User.ts"

const createUser = (): User => ({
	created: faker.date.anytime(),
	email: faker.internet.email(),
	uid: faker.string.uuid(),
})

const fakeUsers = lodash.times(10, createUser)

export const handler: Handlers = {
	async GET (_req, _ctx) {
		const data = Deno.env.get('FAKE') ? fakeUsers : await Users.all()
		const body =  JSON.stringify(data, null, 2)
		return new Response(body)
	},
}