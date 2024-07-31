import React from 'react';

export default function ShareScore({ score }) {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Quiz Score',
          text: `I scored ${score} on this quiz!`,
          url: window.location.href,
        });
      } catch (err) {
        alert('Error sharing score');
      }
    } else {
      alert('Share not supported on this browser');
    }
  };

  return (
    <button onClick={share}>Share Score</button>
  );
}
