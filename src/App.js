import Layout from "./components/Layout";
import Main from "./pages/Main";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordChange from "./pages/PasswordChange";
import Settings from "./pages/Settings";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Main /> */}
        {/* <Store /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <PasswordChange /> */}
        {/* <Settings /> */}
        <Stock />
      </Layout>
    </div>
  );
}

export default App;
