import { Banner } from "./components/banner"
import { Contato } from "./components/contato"
import { Curriculo } from "./components/cv"
import { Footer } from "./components/footer"
import { Projetos } from "./components/projetos"
import { Skills } from "./components/skills"
import GlobalStyle from "./Styles"

function App() {

  return (
    <div>
      <GlobalStyle />
      <Banner />
      <Skills />
      <Curriculo />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
