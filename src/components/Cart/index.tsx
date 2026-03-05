import CartImg from '../../assets/cart-shopping-solid.png'
import './index.css'

interface CartProps {
    items: number
}

export function Cart({ items }: CartProps) {
    return (
        <div className="cart-component">
            <img 
                src={CartImg}
                alt='Imagem de um carrinho'
                width={30}
            />

            <div className='cart-badge'>
                <span>{items}</span>
            </div>
        </div>
    )
}