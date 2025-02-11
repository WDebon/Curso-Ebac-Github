import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import { close, removeItem, startCheckout } from '../../store/reducers/cart'
import { priceFormat } from '../ProductList'
import Checkout from '../Checkout'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(close())
  }
  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Adicione pelo menos um item no carrinho')
    }
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }
  const remItem = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={openCart} />
      <S.Sidebar>
        <S.CartStage className={!isCart ? 'is-checkout' : ''}>
          {pedido.length > 0 ? (
            <>
              <ul>
                {pedido.map((item) => (
                  <S.ItemCart key={item.id}>
                    <S.ImageItem src={item.foto} alt="" />
                    <S.InfosItem>
                      <h3>{item.nome}</h3>
                      <span>{priceFormat(item.preco)}</span>
                    </S.InfosItem>
                    <S.DeleteItemButton
                      type="button"
                      onClick={() => remItem(item.id)}
                    />
                  </S.ItemCart>
                ))}
              </ul>
              <S.InfosCart>
                <p>Valor total</p>
                <span>{priceFormat(getTotalPrice())}</span>
              </S.InfosCart>
              <S.AddCartButton onClick={activeCheckout}>
                Continuar com a entrega
              </S.AddCartButton>
            </>
          ) : (
            <p className="empty-text">
              O carrinho está vazio, adicione pelo menos um produto para
              continuar com a compra
            </p>
          )}
        </S.CartStage>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
