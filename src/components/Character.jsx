import React, { useState } from 'react';

const characters = [
  '/src/assets/character1.png',
  '/src/assets/character2.png',
  '/src/assets/character3.png',
  // Добавьте пути ко всем персонажам
];

const Character = () => {
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const [selectedWord, setSelectedWord] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleCharacterClick = () => {
    const nextCharacter = (currentCharacter + 1) % characters.length;
    setCurrentCharacter(nextCharacter);
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div onClick={handleCharacterClick} style={{ cursor: 'pointer' }}>
        <img src={characters[currentCharacter]} alt="Character" />
      </div>
      <div style={{ margin: '20px' }}>
        <button onClick={() => handleWordClick('Hello')}>Hello</button>
        <button onClick={() => handleWordClick('How are you')}>How are you</button>
      </div>
      {selectedWord && (
        <p>
          You selected "{selectedWord}". Now open the app on your phone and press the same word.
        </p>
      )}
      <div style={{ margin: '20px' }}>
        <p>Which color would you like to paint the horse's mane?</p>
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleColorClick('red')}>Red</button>
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleColorClick('blue')}>Blue</button>
        <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleColorClick('green')}>Green</button>
        <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={() => handleColorClick('yellow')}>Yellow</button>
        <button style={{ backgroundColor: 'pink', color: 'white' }} onClick={() => handleColorClick('pink')}>Pink</button>
      </div>
      {selectedColor && (
        <p>
          You selected "{selectedColor}" color. Now open the app on your phone and choose the same color.
        </p>
      )}
    </div>
  );
};

export default Character;
