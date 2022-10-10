import Layout from "./components/Layout";
import Main from "./pages/Main";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Main /> */}
        <Store />
      </Layout>
    </div>
  );
}

export default App;
