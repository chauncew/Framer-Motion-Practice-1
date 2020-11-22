import {motion} from 'framer-motion';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Nav />

      <Switch>          
        <Route path='/' exact>
          <Main />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'> 
          <Contact />
        </Route>
      </Switch>

        <Footer />
    </div>
  
  );
}

export default App;
