import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./sass/main.scss"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;