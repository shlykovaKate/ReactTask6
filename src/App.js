import {BrowserRouter, Route, Switch} from "react-router-dom"
import Employees from "./pages/Employees";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={HomePage}/>
          <Route path={"/employees"} exact component={Employees}/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default App;