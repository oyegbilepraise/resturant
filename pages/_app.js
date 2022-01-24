import Layout from '../components/Layout'
import '../styles/globals.css'
import styles from '../styles/Navbar.module.css';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
     <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
