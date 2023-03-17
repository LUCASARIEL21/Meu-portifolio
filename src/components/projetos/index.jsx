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
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={calculadora} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Calculadora web</Card.Title>
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
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={olx} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Projeto do TCC</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={relogio} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Relogio digital</Card.Title>
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
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={system} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Sistema de login</Card.Title>
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
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={travel} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Landing Page de Viagens</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyContent: "center"
        }}>
          <Card.Img variant="top" src={future} />
          <Card.Body style={{padding: "10px"}}>
            <Card.Title>Projeto Futuro</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </S.Container>
  )
}