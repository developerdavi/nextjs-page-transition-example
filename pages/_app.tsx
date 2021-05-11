import { AppProps } from 'next/app'
import { Flipper, Flipped } from 'react-flip-toolkit'
import Layout from '../components/Layout'

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Flipper flipKey={router.asPath} spring="stiff">
      <Layout title={pageProps.title}>
        <Flipped flipId="page">
          <div>
            <Component {...pageProps} />
          </div>
        </Flipped>
      </Layout>
    </Flipper>
  )
}

export default CustomApp