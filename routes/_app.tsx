import { type PageProps } from "$fresh/server.ts"

export default function Application ({ Component }: PageProps) {
	return (
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>@localsoft/api</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body>
				<Component />
			</body>
		</html>
	)
}
