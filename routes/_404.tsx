import { Head } from "$fresh/runtime.ts"
import Page from "../components/Page.tsx"

export default function Error404() {
	return (
		<>
			<Head>
				<title>404 Not Found</title>
			</Head>
			<Page>
				<h1>404 Not Found</h1>
				<p>The resource you were looking for wasn't found.</p>
			</Page>
		</>
	);
}
