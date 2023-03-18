import { Navbar } from "../navbar"
import { useState, useEffect } from "react";
import programador from "../../assets/imgs/programador.png"
import * as S from "./styles"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Técnico de TI", "Gamer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <S.Section id="home">
      <Navbar />
      <S.Container>
        <S.Left>
          <S.Title>Bem-Vindo ao meu Portifólio</S.Title>
          <S.txtapres>{`Olá, sou Lucas, e sou`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Técnico de TI", "Gamer" ]'><span className="wrap">{text}</span></span></S.txtapres>
          <S.Desc>
          Este é o meu portifólio onde eu vou falar um pouco sobre mim e minha habilidades profissionais, Hobbies, Futuros projetos e Projetos já feitos.
          </S.Desc>
        </S.Left>
        <S.Right>
          <S.Img src={programador} />
        </S.Right>
      </S.Container>
    </S.Section>
  )
}