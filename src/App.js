import MyNavbar from "./components/MyNavbar";
import SecondNavbar from "./components/SecondNavbar";
import "./albertoCss.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplaySections from './components/DisplaySections'
import Footer from './components/Footer'


function App() {
  return (
    <div className="bg-dark text-white">
      <MyNavbar />
      <SecondNavbar />
<DisplaySections/>
<Footer/>
    </div>
  );
}

export default App;
