import * as S from "./styles"

export const Curriculo = () => {
  return (
    <S.Section>
      <S.Title>Lucas Ariel</S.Title>
      <S.Summary>
        Formado em Ciência da Computação na FPB. Busco sempre
        aprender novas linguagens de programação e metodologias de
        trabalho, aprendendo com pessoas que conhecem melhor do
        assunto, sempre me mostrando útil e produtivo e trabalho muito bem
        em equipe.
      </S.Summary>
      <S.Info>
        <S.LInfo>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Birthday: 04 February 2000 <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Website: <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Degree: Bachelor <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>City: João Pessoa <hr style={{ width: "250px" }} /></p>
        </S.LInfo>
        <S.RInfo>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Age: 23 <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Email: lukasbcunha@gmail.com <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Phone: +55 (083) 98837-8397 <hr style={{ width: "250px" }} /></p>
          <p style={{ margin: "10px", fontWeight: "bold" }}>Job: IT technician <hr style={{ width: "250px" }} /></p>
        </S.RInfo>
      </S.Info>
      <S.Container>
        <S.Left>
          <h1 style={{ margin: "10px" }}>Experiência</h1>
          <h3 style={{ margin: "10px" }}>Mederi Saúde</h3>
          <p style={{ margin: "5px", fontSize: "18px" }}>Técnico de TI</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>fevereiro de 2023 - Present (2 meses)</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>João Pessoa, Paraíba, Brasil</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>Presto suporte técnico aos colaboradores da empresa de forma presencial e
            remota.</p>
          <h3 style={{ margin: "10px" }}>Geap Autogestão em Saúde</h3>
          <p style={{ margin: "5px", fontSize: "18px" }}>Estagiário de TI</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>março de 2021 - dezembro de 2022 (1 ano 10 meses)</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>João Pessoa, Paraíba, Brasil</p>
          <p style={{ margin: "5px", fontSize: "18px" }}>Suporte técnico aos equipamentos eletronicos da empresa e aos funcionarios,
            e prestar auxilio aos demais setores da empresa.</p>
        </S.Left>
        <S.Right>
          <h1 style={{ margin: "10px" }}>Formação acadêmica</h1>
          <h3 style={{ margin: "10px" }}>FPB - faculdade internacional da paraíba</h3>
          <p style={{ margin: "5px" }}>Bacharelado em Ciência da Computação, Ciência da Computação · (fevereiro
            de 2019 - dezembro de 2022)</p>
          <h3 style={{ margin: "10px" }}>FPB - Faculdade Internacional da Paraiba</h3>
          <p style={{ margin: "5px" }}>Bacharelado, Redes de Computadores · (abril de 2018 - dezembro de 2018)</p>
        </S.Right>
      </S.Container>
    </S.Section>
  )
}