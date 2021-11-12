import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Router from "./routes/router";
import Sidebar from "./components/UI/Sidebar/Sidebar";

function App() {
  const pageRoutes = () => {
    return (
      <>
        <div className="App">
          <Sidebar />
          <Router />
        </div>
      </>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route component={pageRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
