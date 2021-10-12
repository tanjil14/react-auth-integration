import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/context/AuthProvider";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping/>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <PlaceOrder/>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
