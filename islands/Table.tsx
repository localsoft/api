export interface Column {
	property: string
	title: string
}

export interface TableProps {
	columns: Column[]
	data: object[]
	onRowClick?: (item: object) => void
}

export const Table = (props: TableProps) => {
	
	const onBodyRowClick = (event: PointerEvent) => {
		console.log('Table.props', props)
		if (props.onRowClick) {
			const index = event.target.dataset.rowIndex
			const item = props.data[index]
			props.onRowClick(item)
		}
	} 

	return (
		<table>
			<thead>
				<tr>
				{props.columns.map(item =>
					<th>{item.title}</th>
				)}
				</tr>
			</thead>
			<tbody>
			{props.data.map((d, index) => 
				<tr onClick={onBodyRowClick}>
				{props.columns.map(c =>
					<td data-row-index={index.toString()}>{String(d[c.property])}</td>
				)}
				</tr>
			)}
			</tbody>
			<tfoot></tfoot>
		</table>
	)
}