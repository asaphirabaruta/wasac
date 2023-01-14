
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import WaterRequest from './Pages/Water_Request';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Route path="/login" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/water-request" component={WaterRequest}></Route>
        <Route path="/" exact component={Home}></Route>
      </div>
    </div>
  );
}

export default App;
