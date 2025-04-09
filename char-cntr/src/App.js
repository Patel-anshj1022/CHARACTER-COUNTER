import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>✏️ Live Character Counter</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="counter">Character Count: {text.length}</p>
    </div>
  );
}

export default App;
