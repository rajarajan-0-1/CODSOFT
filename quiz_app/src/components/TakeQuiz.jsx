import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function TakeQuiz() {
  const { quizId } = useParams(); 
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quizRef = doc(firestore, 'quizzes', quizId);
        const quizSnap = await getDoc(quizRef);
        if (quizSnap.exists()) {
          setQuiz(quizSnap.data());
        } else {
          console.log('No such quiz!');
        }
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: answerIndex,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    setScore(score);

    // Save score to Firestore
    if (currentUser) {
      try {
        await addDoc(collection(firestore, 'scores'), {
          userId: currentUser.uid,
          quizId: quizId,
          score: score,
          totalQuestions: quiz.questions.length,
          timestamp: new Date(),
        });
        console.log('Score saved successfully');
      } catch (error) {
        console.error('Error saving score:', error);
      }
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="take-quiz-container">
      <h2>{quiz.title}</h2>
      {score === null ? (
        <form onSubmit={handleSubmit}>
          {quiz.questions.map((q, qIndex) => (
            <div key={qIndex} className="question">
              <h3>Question {qIndex + 1}:</h3>
              <p>{q.question}</p>
              {q.answers.map((a, aIndex) => (
                <div key={aIndex} className="answer">
                  <input
                    type="radio"
                    id={`question-${qIndex}-answer-${aIndex}`}
                    name={`question-${qIndex}`}
                    value={aIndex}
                    checked={answers[qIndex] === aIndex}
                    onChange={() => handleAnswerChange(qIndex, aIndex)}
                  />
                  <label htmlFor={`question-${qIndex}-answer-${aIndex}`}>{a}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Submit Answers</button>
        </form>
      ) : (
        <div className="score-display">
          <h3>Your Score: {score} / {quiz.questions.length}</h3>
          <button onClick={() => navigate('/scoreboard')}>View Scores</button>
        </div>
      )}
    </div>
  );
}
