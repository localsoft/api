import { Column, Table } from "../islands/Table.tsx"
import Page from "../components/Page.tsx"

const columns: Column[] = [{ 
	property: 'uid',
	title: 'UID'
}, {
	property: 'email',
	title: 'E-Mail',
}, {
	title: 'Created',
	render: item => <time>{item}</time>
}]

export default () => {
	return (
		<Page title="Users">
			<Table columns={columns} url='/api/users' />
		</Page>
	)
}