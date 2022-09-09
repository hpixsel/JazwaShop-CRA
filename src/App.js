import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Slider from "./components/Slider"

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Slider />
      </Layout>
    </div>
  );
}

export default App;