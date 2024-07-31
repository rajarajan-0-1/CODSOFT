import React, { createContext, useContext, useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const scoresCollection = collection(firestore, 'scores');
        const scoresSnapshot = await getDocs(scoresCollection);
        const scoresList = scoresSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScores(scoresList);
      } catch (error) {
        console.error("Error fetching scores: ", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <QuizContext.Provider value={{ scores }}>
      {children}
    </QuizContext.Provider>
  );
}
