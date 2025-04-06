import type { BunRequest } from 'bun'
import sexy from './sexy.html'

Bun.serve({
	port: 3000,
	routes: {
		'/': (req: BunRequest) => {
			const cookies = req.cookies
			console.log(cookies)
			return new Response('OK')
		},
		'/sample.css': async (req: BunRequest) => {
			const cookies = req.cookies
			console.log(cookies)
			return new Response(await Bun.file('./sample.css').bytes(), {
				headers: {
					'Content-Type': 'text/css',
				},
			})
		},
		'/sexy': sexy,
		'/log': (req: BunRequest) => {
			const url = new URL(req.url)
			let p = url.searchParams.get('key')
			console.log(p)
			return new Response('Ok')
		},
	},
})
