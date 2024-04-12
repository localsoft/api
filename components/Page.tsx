import { ComponentChildren } from 'preact'

export interface Props {
	children: ComponentChildren
}

export default ({ children }: Props) => {
	

	return (
		<>
			<header>
				<nav>
					<ul>
						<li>@localsoft</li>
						<li>
							<a href='/'>api</a>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				{children}
			</main>
			<footer>
				<ul>
					<li>
						<a href='https://api.localsoft.org'>api</a>
					</li>
				</ul>
			</footer>
		</>
	)
}