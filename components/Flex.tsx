import { ComponentChildren } from 'preact'

export interface FlexProps {
	children: ComponentChildren,
	gap?: string
}

export const Flex = (props: FlexProps) => {	
	return <div children={props.children} style={{
		display: 'flex'
	}} />
}