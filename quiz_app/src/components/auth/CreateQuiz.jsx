import React, { useState } from 'react';
import { firestore } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 

export default function CreateQuiz() {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answers: [''] }]);
  };

  const handleQuestionChange = (index, newQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = newQuestion;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, newAnswer) => {
    const updatedQuestions = [...questions];
    const updatedAnswers = [...updatedQuestions[questionIndex].answers];
    updatedAnswers[answerIndex] = newAnswer;
    updatedQuestions[questionIndex].answers = updatedAnswers;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const quizRef = await addDoc(collection(firestore, 'quizzes'), {
        title: quizTitle,
        questions: questions,
      });
      console.log('Quiz created with ID: ', quizRef.id);
      navigate('/dashboard'); // Redirect to the dashboard after creation
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="create-quiz-container">
      <h2>Create a New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Quiz Title:</label>
        <input
          type="text"
          id="title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          required
        />
        {questions.map((q, index) => (
          <div key={index} className="question">
            <label htmlFor={`question-${index}`}>Question {index + 1}:</label>
            <input
              type="text"
              id={`question-${index}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
            />
            {q.answers.map((a, ansIndex) => (
              <div key={ansIndex} className="answer">
                <label htmlFor={`answer-${index}-${ansIndex}`}>Answer {ansIndex + 1}:</label>
                <input
                  type="text"
                  id={`answer-${index}-${ansIndex}`}
                  value={a}
                  onChange={(e) => handleAnswerChange(index, ansIndex, e.target.value)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].answers.push('');
                setQuestions(updatedQuestions);
              }}
            >
              Add Answer
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}
