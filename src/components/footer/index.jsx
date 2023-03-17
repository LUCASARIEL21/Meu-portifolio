import React from 'react'
import youtube from '../../assets/imgs/youtube.svg'
import github from '../../assets/imgs/github.svg'
import * as S from "./styles"

export const Footer = () => {
  return (
    <S.container>
      <br />
      <S.tittle>Créditos</S.tittle>
      <S.p>Este portifólio inspirado nos canais e repositorios abaixo:</S.p>
      <S.creditos>
        <a href="https://www.youtube.com/watch?v=qALsVa-V9qo&list=PLSph83aN8riPOYzcC4dzBHlTQlPXLASyq&index=15&t=5531s"><img src={youtube} alt="Icon" height={30} width={30} /></a>
        <a href="https://www.youtube.com/watch?v=zJE-ze4TfXc&list=PLSph83aN8riO8MFjvTi-ivLk-9S_FmA2H&index=7&t=6569s"><img src={youtube} alt="Icon" height={30} width={30} /></a>
        <a href="https://www.youtube.com/channel/UCObrjoZZJSjznfCO5Vx9qUQ"><img src={youtube} alt="Icon" height={30} width={30} /></a>
        <a href="https://github.com/judygab"><img src={github} alt="Icon" height={30} width={30} /></a>
        <a href="https://github.com/safak/youtube23/tree/3d-portfolio"><img src={github} alt="Icon" height={30} width={30} /></a>
      </S.creditos>
      <S.txt>Copyright 2022. All Rights Reserved</S.txt>
      <br />
    </S.container>
  )
}




