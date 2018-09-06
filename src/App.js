import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className='nav d-flex align-items-center position-absolute'>
            <Link to='/'><h1 className='ion-md-microphone nav-link'> Bloc Jams</h1></Link>
            <Link to='/library' className='nav-link mx-5'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
        <footer>
          <p className='text-center pt-2'>This site was created using React to fulfill requirements for the Bloc Web Development Program. &copy; Cortney Thomas 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
