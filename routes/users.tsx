import { Column, Table } from "../islands/Table.tsx"
import Page from "../components/Page.tsx"
import { Users } from '../data/User.ts'

const columns: Column[] = [{ 
	property: 'uid',
	title: 'UID'
}, {
	property: 'email',
	title: 'E-Mail',
}, {
	title: 'Created',
	render: (dataItem) => <time>{dataItem.created}</time>
}]

export default async () => {
	const data = await Users.all()
	console.log('/users', data)
	return (
		<Page title="users">
			<Table columns={columns} data={[]} />
		</Page>
	)
}