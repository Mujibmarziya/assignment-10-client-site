import React from 'react';
import {  useTypewriter } from 'react-simple-typewriter'
const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ['Arts Mania','Arts Mania'],
        loop: 0
      })
    return (
        <div className='App'>
        <span>{text}</span>
      </div>
    );
};

export default TypeWriter;