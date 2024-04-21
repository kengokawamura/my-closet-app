import Layout from '../components/layout'

export default function MyClosetApp({ Component, pageProps }) {
    return (
        // レイアウトでアプリ全体を包みます。
        // それにより全てのページで同じレイアウトが使われます
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}