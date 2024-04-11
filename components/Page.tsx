import { ComponentChildren } from 'preact'

export interface Props {
	children: ComponentChildren
	title: string
}

export default ({ children, title }: Props) => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<a href='/'>api</a>
						</li>
						<li>
							<a href='/users'>users</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				{children}
			</main>
			<footer>

			</footer>
		</>
	)
}