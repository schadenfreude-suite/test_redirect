Bun.serve({
	port: 3000,
	routes: {
		'/': (req: Request) => {
			console.log(req.headers)
			return new Response('OK')
		},
		'/nya': req => {
			const url = new URL(req.url)
			const redirect = url.searchParams.get('redirect')
			if (!redirect) return new Response('Missing redirect')
			else return Response.redirect(redirect)
		},
	},
})
