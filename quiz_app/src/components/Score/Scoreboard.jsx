import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../context/AuthContext';

export default function Scoreboard() {
  const { currentUser } = useAuth();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      if (currentUser) {
        const scoresRef = collection(firestore, 'scores');
        const q = query(scoresRef, where('userId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const fetchedScores = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setScores(fetchedScores);
      }
    };

    fetchScores();
  }, [currentUser]);

  return (
    <div className="scoreboard-container">
      <h2>Scoreboard</h2>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            Quiz ID: {score.quizId} - Score: {score.score} / {score.totalQuestions} - Date: {new Date(score.timestamp.seconds * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
