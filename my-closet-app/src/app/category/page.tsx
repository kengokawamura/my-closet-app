import path from 'path'
import Layout from '../components/layout'

export default async function Page() {
    let path = `${process.env.MY_CLOSET_API_HOST}/category`;
    const response = await fetch(path)
    const body = await response.text()
    return (
        <Layout>
            <h1>Fetch Test</h1>
            <h1>{body}</h1>
        </Layout>
    )
}