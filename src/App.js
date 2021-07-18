import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainHeader from './Components/MainHeader';
import Home from './Pages/Home';
import RecipePage from './Pages/RecipePage';
import NotFound from './Pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/recipes/:recipeId" component={ RecipePage } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
