import "./App.css";
import { Provider } from "react-redux";
import store from "./Componensts/Redux/store";
import Login from "./Componensts/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./Componensts/Welcome/Welcome";
import CakeContainer from "./Componensts/CakeShop/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <Router>

          <switch>
            <Route path="/" exact component={Login} />

            <Route path="/Welcome" component={() => <Welcome />} />

          </switch>
        </Router> */}
          <CakeContainer />
        </header>
      </div>
    </Provider>
  );
}

export default App;
