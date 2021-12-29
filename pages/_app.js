import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
	console.log = function () {};
	if(Component.displayName === 'Dashboard' )
		return <Component {...pageProps} />
	else
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
}
