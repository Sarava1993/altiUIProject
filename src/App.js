import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="appIntroParent">
            <Router>
              <Switch> 
                <Route exact path='/' component={Login}></Route> 
                <Route exact path='/signup' component={SignUp}></Route> 
                <Route exact path='/dashboard' component={Dashboard}></Route> 
              </Switch> 
            </Router>
          </div>
      </div>
    );
  }
}

// const mapStateToProps = ( state ) => {
//   return {
//     ctr: state.counter
//   };
// };

// const mapDispathToProps = ( dispatch ) => {
//   return {
//     onIncrementCounter: () => dispatch(actionCreators.increment())
//   }
// }

// export default connect(mapStateToProps, mapDispathToProps)(App);
export default App;

