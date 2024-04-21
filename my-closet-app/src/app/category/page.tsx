import Layout from '../components/layout'
import category_register_style from './category-register.module.css'

export default function Page() {
    return (
        <Layout>
            <button>
                <h1 className={category_register_style.button}>Category Test</h1>
            </button>
        </Layout>
    )
}