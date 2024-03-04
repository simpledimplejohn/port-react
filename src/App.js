import React, { useState } from 'react';

const App = () => {
  const [word, setWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Append additional information to the word
    const appendedWord = `: ${word}, location: s3, repository: port-front-end`;

    // Send the word to the server
    try {
      const response = await fetch('http://34.227.225.227:3000/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: appendedWord }),
      });

      if (!response.ok) {
        throw new Error('Failed to log word');
      }

      console.log('Word logged successfully:', appendedWord);
    } catch (error) {
      console.error('Error logging word:', error);
    }

    // Optionally, reset the form
    setWord('');
  };

  return (
    <div>
      <h1>Local</h1>
      <h2>Word Form</h2>
      <p>This form will send a message to the front end</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Enter Word</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          name="word"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
