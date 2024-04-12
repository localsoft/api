import Page from "../components/Page.tsx"
import { Column, Table } from '../islands/Table.tsx'

const columns: Column[] = [{
	property: 'name',
	title: 'Name',
}, {
	property: 'count',
	title: 'Records',
}]

const data = [{
	count: 12,
	name: 'users',
}]

export default () => {
	const onRowClick = (item: object) => {
		console.log('Index:onRowClick', item)
	}
	
	return (
		<Page>
			<Table columns={columns} data={data} onRowClick={onRowClick} />
		</Page>
	)
}