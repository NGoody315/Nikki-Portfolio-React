import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Nav />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/portfolio' component={Portfolio} />
       <Route exact path='/contact' component={Contact} />
       <Route exact path='/resume' component={Resume} />
     </Switch>
     <Footer />
    </div>
    </Router>
    
  );
}

export default App;
