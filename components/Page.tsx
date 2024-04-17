import { ComponentChildren } from 'preact'

export interface Props {
	children: ComponentChildren
}

export default ({ children }: Props) => {
	return (
		<>
			<header style={{ backgroundColor: 'lightgray', display: 'flex', gap: '1rem', padding: '1rem' }}>
				<span>@localsoft</span>
			</header>
			<main>
				{children}
			</main>
		</>
	)
}