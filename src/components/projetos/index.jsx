import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import calculadora from "../../assets/imgs/projeto calculadora.png"
import olx from "../../assets/imgs/projeto derivado da OLX.png"
import relogio from "../../assets/imgs/projeto relogio.png"
import system from "../../assets/imgs/projeto sistema login.png"
import travel from "../../assets/imgs/projeto webpage travel.png"
import future from "../../assets/imgs/blog.png"
import * as S from "./styles"

export const Projetos = () => {
  return (
    <S.Container id="projetos">
      <S.Title>
        Projetos
      </S.Title>
      <CardGroup style={{
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        margin: "20px",
        justifyContent: "center"
      }}>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <Card.Img variant="top" src={calculadora} />
          <Card.Body style={{ padding: "10px" }}>
            <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Calculadora web</Card.Title>
            <Card.Text>Projeto feito para estudo de HTML, CSS, JavaScript e o framework REACTJS. Este projeto só poder ser visualizado pelo seu repositorio no meu GITHUB.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          margin: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <Card.Img variant="top" src={olx} />
          <Card.Body style={{ padding: "10px" }}>
            <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Projeto do TCC</Card.Title>
            <Card.Text>Projeto feito para o TCC da minha graduação, feito utilizando o framework REACTJS e suas bibliotecas para o front-end do projeto, e foi utilizado NODE.JS e PostgreSQL para fazer o back-end do projeto.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <Card.Img variant="top" src={relogio} />
          <Card.Body style={{ padding: "10px" }}>
            <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Relogio digital</Card.Title>
            <Card.Text>Projeto feito para estudo de HTML, CSS, JavaScript e o framework REACTJS. Este projeto só poder ser visualizado pelo seu repositorio no meu GITHUB.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup >
      <CardGroup style={{
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        margin: "20px",
        justifyContent: "center"
      }}>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <Card.Img variant="top" src={system} />
          <Card.Body style={{ padding: "10px" }}>
            <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Sistema de login</Card.Title>
            <Card.Text>Projeto feito para estudo de HTML, CSS, JavaScript e o framework REACTJS. Este projeto só poder ser visualizado pelo seu repositorio no meu GITHUB.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          margin: "10px",
          justifyContent: "center",
          cursor: "pointer",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <a href='https://viagensbr.netlify.app' style={{textDecoration: "none"}}>
            <Card.Img variant="top" src={travel} />
            <Card.Body style={{ padding: "10px" }}>
              <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Landing Page de Viagens</Card.Title>
              <Card.Text>Projeto de pontos turisticos de cada estado do Brasil. Este projeto foi feito utilizando o framework REACTJS, ele esta online e pode ser acessado ao clicar neste CARD.</Card.Text>
            </Card.Body>
          </a>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center",
          maxHeight: "400px",
          maxWidth: "300px"
        }}>
          <Card.Img variant="top" src={future} />
          <Card.Body style={{ padding: "10px" }}>
            <Card.Title style={{ marginBottom: "10px", fontWeight: "bold" }}>Projeto Futuro</Card.Title>
            <Card.Text>Projeto em desenvolvimento, é um projeto de um Blog com informações sobre Tecnologia e Cultura POP. Em breve estara disponivel para ser acessado.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </S.Container>
  )
}