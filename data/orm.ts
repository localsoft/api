export class Model {
	uid: string = crypto.randomUUID()
}

export class Store<T extends Model> 
{
	private key: string

	constructor (key: string) {
		this.key = key
	}

	async all (): Promise<T[]> {
		const kv = await Deno.openKv()
		return await kv.get([this.key]) as T[]
	}

	async get (id: string): Promise<T> {
		const kv = await Deno.openKv()
		return await kv.get([this.key, id]) as T
	}
}