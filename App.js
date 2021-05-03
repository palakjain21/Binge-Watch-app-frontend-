import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Series from './Series/Series';
import Kids from './Kids/Kids';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
             <Route path="/Signup" component={Signup} /> 
             <Route path="/Login" component={Login} /> 
             <Route path="/Home" component={Home}/>
             <Route path="/Movies" component={Movies}/>
             <Route path="/Series" component={Series}/>
             <Route path="/Kids" component={Kids}/>
          </Switch>
      </BrowserRouter>
      
        
   
    </div>
  );
}

export default App;
