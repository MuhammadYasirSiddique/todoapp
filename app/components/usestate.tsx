'use client'
import React, { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState('');

  function handleChange(event: String | any) {
    setText(event.target.value);
  }

  return (
    <div>
        <label>Enter Text
      <input type="text" value={text} onChange={handleChange} /></label>
      <p>You typed: {text}</p>
    </div>
  );
}