import About from "./components/About";
import Features from "./components/Features";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App flex flex-col gap-10 md:gap-15">
      <Header />
      <Home />
      <About />
      <Features />
      <Reviews />
    </div>
  );
}

export default App;
