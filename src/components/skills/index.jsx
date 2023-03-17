import { useState } from "react"
import { Gamer } from "../game"
import { Mob } from "../mob"
import { Tech } from "../tech"
import { WebDesign } from "../web"
import * as S from "./styles"

export const Skills = () => {
  const data = [
    "Dev Web",
    "Dev Mobile",
    "Tech",
    "Gamer"
  ]

  const [work, setWork] = useState("Dev Web")

  return (
    <S.Section id="skills">
      <S.Title>SKILLS</S.Title>
      <S.Container>
        <S.Left>
          <S.List>
            {data.map((item) => (
              <S.ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </S.ListItem>
            ))}
          </S.List>
        </S.Left>
        <S.Right>
          {work === "Dev Web" ? (
            <WebDesign />
          ) : work === "Dev Mobile" ? (
            <Mob />
          ) : work === "Tech" ? (
            <Tech />
          ) : (
            <Gamer />
          )}
        </S.Right>
      </S.Container>
    </S.Section>
  )
}