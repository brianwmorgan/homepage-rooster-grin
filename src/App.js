import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HelpingHand from "./components/HelpingHand/HelpingHand.js";
import MomAndSon from "./components/MomAndSon/MomAndSon.js";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo.js";
import SmilingGirl from "./components/SmilingGirl/SmilingGirl.js";
import Reviews from "./components/Reviews/Reviews.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <HelpingHand />
        <MomAndSon />
        <CompanyInfo />
        <SmilingGirl />
        <Reviews />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
