import navbar_style from './navbar.module.css'
import { notojp } from '../utils/font'

export default function navbar() {
    return (
        <nav className={notojp.className}>
            < h1 className={navbar_style.ul} >
                <li className={navbar_style.li}><a href="/">トップ</a></li>
                <li className={navbar_style.li}><a href="/category">クローゼット一覧</a></li>
                <li className={navbar_style.li}><a href="./index.html">設定</a></li>
            </h1 >
        </nav >
    )
}