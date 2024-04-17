import { ComponentChildren } from 'preact'

export interface ButtonProps {
	children?: ComponentChildren
	label: string
	onClick: () => void
}

const style = {
	border: '1px solid black',
	borderRadius: '0.25rem',
	padding: '0.25rem 0.5rem 0.25rem 0.5rem',
}

export const Button = (props: ButtonProps) => {
	const children = props.children || props.label

	return <button onClick={props.onClick} style={style}>{children}</button>
}