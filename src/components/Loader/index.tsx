import { ClockLoader } from 'react-spinners'
import { Container } from './styles'
import { cores } from '../../styles'

const Loader = () => {
  return (
    <>
      <Container>
        <ClockLoader color={cores.vermelho} />
      </Container>
    </>
  )
}

export default Loader
