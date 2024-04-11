import Page from '../components/Page.tsx'

export default () => {
	return (
		<Page title='Data'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Records</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>users</td>
						<td>0</td>
						<td>
							<a href='/users'>Link</a>
						</td>
					</tr>
				</tbody>
			</table>
		</Page>
	)
}