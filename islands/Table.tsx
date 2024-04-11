export interface Column {
	property: string
	title: string
}

export interface TableProps {
	columns: Column[]
	data: object[]
	url: string
}

export const Table = (props: TableProps) => {
	return (
		<table>
			<thead></thead>
			<tbody></tbody>
			<tfoot></tfoot>
		</table>
	)
}