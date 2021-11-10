import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
// import { Home } from "./pages/Home";
// import { Sidebar } from "./";
import Router from "./routes/router";
import Sidebar from "./components/UI/Sidebar/Sidebar";

function App() {
  const pageRoutes = () => {
    return (
      <>
        <div className="App">
          <Sidebar />
          <Router />
          {/* <div></div> */}
        </div>
      </>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route component={withRouter(pageRoutes)} />
        {/* <Route path="/home" component={withRouter(Home)} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
