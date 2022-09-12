import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Slider from "./components/Slider"
import Tutorial from "./components/Tutorial";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Slider />
        <Tutorial />
      </Layout>
    </div>
  );
}

export default App;