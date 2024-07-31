import React from 'react';
import '../src/App.css';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { QuizProvider } from '../src/context/QuizContext';
import PrivateRoute from '../src/components/auth/PrivateRoute';
import Login from '../src/components/auth/Login';
import Register from '../src/components/auth/Register';
import Home from '../src/components/Layout/Home';
import Dashboard from '../src/components/Layout/Dashboard';
import Profile from '../src/components/Layout/Profile';
import CreateQuiz from '../src/components/auth/CreateQuiz';
import TakeQuiz from '../src/components/TakeQuiz';
import Scoreboard from '../src/components/Score/Scoreboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <QuizProvider>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/create-quiz" element={<PrivateRoute element={<CreateQuiz />} />} />
            <Route path="/take-quiz/:quizId" element={<PrivateRoute element={<TakeQuiz />} />} />
            <Route path="/scoreboard" element={<PrivateRoute element={<Scoreboard />} />} />
            </Routes>
        </QuizProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
