import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
	if(Component.name === 'SignIn' || Component.name === 'SignUp' || Component.name === 'Dashboard' )
		return <Component {...pageProps} />
	else
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
}
