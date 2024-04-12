import { Model, Store } from "./orm.ts"

export interface UserProps {
	email: string
}

export class User extends Model {
	created: string = (new Date()).toISOString();
	email: string;
	passwordHash?: string;

	constructor({ email }: UserProps) {
		super()
		this.email = email
	}
}

export const Users = new Store<User>("users")