import { ComponentChildren } from "preact"
import { Button } from "./Button.tsx"
import { Flex } from "./Flex.tsx"

const ModalBackground = ({children}: {children: ComponentChildren}) =>
	<div children={children} style={{ 
		alignItems: 'center',
		backgroundColor: 'black',
		display: 'flex',
		height: '100vh',
		justifyContent: 'center', 
		opacity: 0.8,
		overflowY: 'hidden',
		position: 'absolute', 
		top: 0, 
		width: '100vw',
	}} />

const ModalFooter = ({ children }: { children: ComponentChildren }) =>
	<footer style={{
		borderTop: '1px solid black',
		marginTop: '0.5rem',
		padding: '0.25rem 0 0.25rem 0',
	}}>{children}</footer>
	

const ModalHeader = ({ title }: { title?: string }) => {
	return title ? (
		<header style={{
			borderBottom: '1px solid black',
			marginBottom: '0.5rem',
			padding: '0.25rem 0 0.25rem 0',
		}}>{title}</header>
	) : null
}

export interface ModalProps {
	children: ComponentChildren
	title: string
	visible: boolean
}

export const Modal = (props: ModalProps) => {
	return props.visible ? (
		<ModalBackground>
			<div style={{ backgroundColor: 'white', borderRadius: '0.25rem', padding: '0.25rem' }}>
				<ModalHeader title={props.title} />
				{props.children}
				<ModalFooter>
					<Flex gap='0.25rem'>
						<Button label='Save' onClick={() => {}} />
						<Button label='Cancel' onClick={() => {}} />
					</Flex>
				</ModalFooter>
			</div>
		</ModalBackground>
	) : null
};
