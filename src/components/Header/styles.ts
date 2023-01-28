import styled from 'styled-components'
import headerBg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background: url(${headerBg}) no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: auto;
  min-height: 20rem;

  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 6.5rem;
  }
`
