import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <S.Logo src={logo} alt="Logo do efood" />
    <S.Links>
      <li>
        <S.Link>
          <img src={instagram} alt="Icone instagram" />
        </S.Link>
      </li>
      <li>
        <S.Link>
          <img src={facebook} alt="Icone facebook" />
        </S.Link>
      </li>
      <li>
        <S.Link>
          <img src={twitter} alt="Icone twitter" />
        </S.Link>
      </li>
    </S.Links>
    <S.Section>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Section>
  </S.Container>
)

export default Footer
