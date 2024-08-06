import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Content>
        <Content.Column1/>
        <Content.Column2/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
