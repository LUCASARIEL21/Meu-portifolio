import { Phone } from "../cell"
import linkedin from "../../assets/imgs/linkedin.svg"
import zap from "../../assets/imgs/zap.svg"
import insta from "../../assets/imgs/insta.svg"
import * as S from "./styles"

export const Contato = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Left>
          <Phone />
        </S.Left>
        <S.Right>
          <S.Title>
            Contato
          </S.Title>
          <S.Desc>
            Caso queira entrar em contato comigo basta clicar em um dos icones abaixo e entrar na rede social que queria entrar em contato comigo:
          </S.Desc>
          <S.Icons>
            <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/">
              <img src={linkedin} alt="Icon" height={50} width={50} style={{ margin: "10px" }} />
            </a>
            <a href="https://wa.me/83988378397">
              <img src={zap} alt="Icon" height={50} width={50} style={{ margin: "10px" }} />
            </a>
            <a href="https://www.instagram.com/lucas_arielfran/?hl=el">
              <img src={insta} alt="Icon" height={50} width={50} style={{ margin: "10px" }} />
            </a>
          </S.Icons>
        </S.Right>
      </S.Container>
    </S.Section>
  )
}