import { useState } from "react"
import logo from "../../assets/imgs/computing.svg"
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div className="App" style={{maxHeight: "420px"}}>
      <Navbar bg="T=transparent" variant="dark"
        sticky="top" expand="lg"
        collapseOnSelect
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Navbar.Brand style={{
          display: "flex",
          alignItems: "center"
        }}>
          <img src={logo} style={{ margin: "10px", height: "50px" }} />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse style={{ margin: "10px" }}>
          <Nav>
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#cv" className={activeLink === 'cv' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cv')}>Currículo</Nav.Link>
            <Nav.Link href="#projetos" className={activeLink === 'projetos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')}>Projetos</Nav.Link>
            <Nav.Link href="#contato" className={activeLink === 'contato' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contato')}>Contato</Nav.Link>
          </Nav >
        </Navbar.Collapse >

      </Navbar >
    </div >
  )
}