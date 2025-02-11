import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  rosa: '#FFEBD9',
  branco: '#FFFFFF',
  amarelo: '#FFB930',
  fundoClaro: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '821px',
  mobile: '430px'
}
export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${cores.fundoClaro};
  color: ${cores.vermelho};
}
`
