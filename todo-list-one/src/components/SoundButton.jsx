// import React, { useRef } from 'react';

// const SoundButton = () => {
//   // Создаём ref для аудио элемента
//   const audioRef = useRef(null);

//   // Функция для воспроизведения звука
//   const playSound = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   return (
//     <div>
//       <button onClick={playSound}>Играть звук</button>

//       {/* Аудио элемент с указанным звуковым файлом */}
//       <audio ref={audioRef} src="/but1.mp3" preload="auto" />
//     </div>
//   );
// };

// export default SoundButton;



import React, { useState } from 'react';
// import audioFile from './audioFile.mp3'; 

const SoundButton = () => {
  // Создаём состояние для управления воспроизведением звука
  const [isPlaying, setIsPlaying] = useState(false);

  // Функция для воспроизведения звукового эффекта
  const playSoundEffect = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };



  const playSoundAndAlert = () => {
    const audio = new Audio('/but1.mp3'); // Укажите путь к вашему звуковому файлу
    audio.play();
    //alert('Звук воспроизводится!');
  };



  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      {/* Использование элемента <audio> для прямого воспроизведения звука */}
      {/* <audio src={audioFile} controls> */}
      {/* <audio src="/but1.mp3" controls>
      Ваш браузер не поддерживает воспроизведение аудио.
    </audio> */}
      {/* Или использование кнопки для управления состоянием воспроизведения звука */}




      {/* <button onClick={playSoundEffect}>
      <audio src="/but1.mp3" preload="auto" />
    </button> */}



      <button style={buttonStyles} onClick={playSoundAndAlert}>
        Нажми меня
      </button>



    </>

  );
};

export default SoundButton;
