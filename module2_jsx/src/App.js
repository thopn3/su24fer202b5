import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import courses from "./courses.json";

function App() {
  return (
    <div>
      <Header/>
      <Content>
        <Content.Column1/>
        {/* Truyen du lieu courses cho component Column2 */}
        <Content.Column2 data={courses} title="List of Courses"/>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
