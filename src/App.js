import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Section1 from "./components/Section1/Section1.js";
import Section2 from "./components/Section2/Section2.js";
import Section3 from "./components/Section3/Section3.js";
import Section4 from "./components/Section4/Section4.js";
import Section5 from "./components/Section5/Section5.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
