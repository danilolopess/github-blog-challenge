import { HeaderContainer } from './styles'
import LogoBlog from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoBlog} alt="" />
    </HeaderContainer>
  )
}
