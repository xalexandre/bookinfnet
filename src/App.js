import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';    // Tela inicial
import Login from './components/Login';  // Tela de login
import SignUp from './components/SignUp';  // Tela de cadastro
import HomeLogged from './components/HomeLogged';  // Tela "HomeLogada"
import NewBook from './components/NewBook';  // Tela "NewBook"
import BookDetails from './components/BookDetails';  // Tela "BookDetails"
import Dashboard from './components/Dashboard';  // Tela "Dashboard"

function App() {
  return (
    <Router>
      <Switch>
        {/* Rota para a tela inicial */}
        <Route exact path="/" component={Home} />
        
        {/* Rota para a tela de login */}
        <Route path="/login" component={Login} />

        {/* Rota para a tela de cadastro */}
        <Route path="/signup" component={SignUp} />

        {/* Rota para a tela "HomeLogada" */}
        <Route path="/home-logged" component={HomeLogged} />

        {/* Rota para a tela "NewBook" */}
        <Route path="/newbook" component={NewBook} />

        {/* Rota para a tela "BookDetails" */}
        <Route path="/bookdetails" component={BookDetails} />

        {/* Rota para a tela "Dashboard" */}
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
