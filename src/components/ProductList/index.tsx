import { useState } from 'react'
import Food from '../Product'
import { AddCartButton } from './styles'
import close from '../../assets/close 1.png'
import { useDispatch } from 'react-redux'
import { addItem, open } from '../../store/reducers/cart'
import * as S from './styles'

export type Props = {
  restaurant: Restaurant
  pedido: Pedido
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const FoodList = ({ restaurant, pedido }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [portion, setPortion] = useState('')
  const [price, setPrice] = useState(0)
  const [id, setId] = useState(0)

  const dispatch = useDispatch()
  const addToCart = () => {
    pedido.id = id
    pedido.nome = title
    pedido.foto = image
    pedido.preco = price
    dispatch(addItem(pedido))
    setShowModal(false)
    dispatch(open())
  }

  return (
    <>
      <S.Container className="container">
        <S.List>
          {restaurant.cardapio.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setTitle(food.nome)
                setDescription(food.descricao)
                setPortion(food.porcao)
                setPrice(food.preco)
                setName(food.nome)
                setImage(food.foto)
                setId(food.id)
              }}
            >
              <Food
                key={food.id}
                image={food.foto}
                title={food.nome}
                description={food.descricao}
                name={food.nome}
              />
            </li>
          ))}
        </S.List>
      </S.Container>
      <S.Modal className={showModal ? 'visible' : ''}>
        <S.ModalContent>
          <S.FoodImage src={image} alt={name} />
          <S.ModalContainer>
            <S.FoodTitle>{title}</S.FoodTitle>
            <S.FoodDescription>
              {description}
              <p>Serve: {portion}</p>
            </S.FoodDescription>
            <AddCartButton onClick={addToCart}>
              Adicionar ao carrinho - {priceFormat(price)}
            </AddCartButton>
          </S.ModalContainer>
          <S.CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </S.ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default FoodList
