import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa};
  text-align: center;
  height: 298px;
`
export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const Links = styled.div`
  margin-top: 32.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 8px;
  }
`
export const Link = styled.a`
  margin-right: 8px;
  cursor: pointer;
`
export const Section = styled.p`
  margin: 80px auto;
  max-width: 480px;
  width: 100%;
  font-size: 10px;
  font-weight: regular;
`
