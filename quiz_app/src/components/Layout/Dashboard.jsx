import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizCollection = collection(firestore, 'quizzes');
        const quizSnapshot = await getDocs(quizCollection);
        const quizList = quizSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuizzes(quizList);
      } catch (error) {
        setError('Error fetching quizzes.');
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-buttons">
      <Link style={{'textDecoration':'none'}} to="/create-quiz" className="button dashboard-button">Create Quiz</Link>
      <Link style={{'textDecoration':'none'}} to="/scoreboard" className="button dashboard-button">View Scores</Link>
      </div>
      <div className="quizzes-container">
        <h2 className="quizzes-title">Available Quizzes</h2>
        <ul className="quizzes-list">
          {quizzes.map(quiz => (
            <li key={quiz.id} className="quiz-item">
              <Link style={{'textDecoration':'none'}} to={`/take-quiz/${quiz.id}`} className="quiz-link">
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
