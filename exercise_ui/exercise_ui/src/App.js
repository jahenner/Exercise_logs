import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import Navigation from './components/Navigation';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>My personal exercise log</h1>
          <p>A place where you can keep track of all of your exercises</p>
        </header>
        <Navigation />
        <main className="App-main">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <AddPage />
          </Route>
          <Route path="/edit-exercise">
            <EditPage exerciseToEdit={exerciseToEdit} />
          </Route>
        </main>
        <footer className="App-footer">
          <p>&copy; 2022 Alex Henner</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
