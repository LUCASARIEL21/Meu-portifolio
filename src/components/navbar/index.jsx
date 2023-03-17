import { useState} from "react"
import logo from "../../assets/imgs/computing.svg"
import * as S from "./styles"

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <S.Section>
      <S.Container>
        <S.Links>
          <S.Logo src={logo} />
          <S.List>
            <S.ListItem href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</S.ListItem>
            <S.ListItem href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</S.ListItem>
            <S.ListItem href="#cv" className={activeLink === 'cv' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cv')}>Currículo</S.ListItem>
            <S.ListItem href="#projetos" className={activeLink === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</S.ListItem>
            <S.ListItem href="#contato" className={activeLink === 'contato' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contato')}>Contato</S.ListItem>
          </S.List>
        </S.Links>
      </S.Container>
    </S.Section>
  )
}