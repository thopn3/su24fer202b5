import { Container } from "react-bootstrap";
import "./Layout.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Container id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/home" element={<Content/>}/>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/register" element={<Register/>}/>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
