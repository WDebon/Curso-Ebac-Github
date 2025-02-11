import * as S from './styles'

export type Props = {
  restaurant: Restaurant
}
const Banner = ({ restaurant }: Props) => {
  return (
    <S.Container style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.Tipo>{restaurant.tipo}</S.Tipo>
        <S.Titulo>{restaurant.titulo}</S.Titulo>
      </div>
    </S.Container>
  )
}

export default Banner
