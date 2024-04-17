import { Column, Table } from "../islands/Table.tsx"
import { Modal } from "../components/Modal.tsx"
import { signal } from '@preact/signals'
import { Users } from '../data/User.ts'
import Page from "../components/Page.tsx"
import UserForm from '../components/forms/UserForm.tsx'
import { Button } from "../components/Button.tsx";

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
	const modalVisible = signal(false)
	const formState = signal(null)
	const data = await Users.all()
	console.log('/users', data)

	
	return (
		<Page title="users">
			<Button label='New User' onClick={() => modalVisible.value = true} />
			<Table columns={columns} data={[]} />
			<Modal title='Verb User' visible={modalVisible.value}>
				<UserForm state={formState} />
			</Modal>
		</Page>
	)
}