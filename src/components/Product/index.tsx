import { Card, Photo, Title, Description, AddCartButton } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  name: string
}
export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}
const Food = ({ image, title, description, name }: Props) => {
  return (
    <Card>
      <Photo src={image} alt={name} />
      <Title>{title}</Title>
      <Description>{reduceDescription(description)}</Description>
      <AddCartButton to={''}>Mais detalhes</AddCartButton>
    </Card>
  )
}

export default Food
