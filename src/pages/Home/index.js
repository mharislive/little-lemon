import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Specials from "../../components/Specials";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
      </Main>
      <Footer />
    </>
  );
}

export default App;
