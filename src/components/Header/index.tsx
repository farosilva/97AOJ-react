import { Cart } from '../Cart'
import { Logo } from '../Logo'
import './index.css'

export function Header() {
    return (
        <header>
            <Logo />
            <Cart items={0} />            
        </header>
    )
}