
import Page1 from "./components/page1/Page1";
import './App.css'
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";
import Page5 from "./components/page5/Page5";
import Page7 from "./components/page7/Page7";
import PageDog from "./components/page6/PageDog";
import Page8 from "./components/page8/Page8";
import Page9 from "./components/page9/Page9";
import Footer from "./components/footer/Footer";
import CopyRight from "./components/copyright/CopyRight";
function App() {
  return (
    <div className="App">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <PageDog/>
      <Page7/>
      <Page8/>
      <Page9/>
      <Footer/>
     <CopyRight/>
    </div>
  );
}

export default App;
