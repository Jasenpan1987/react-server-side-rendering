import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Im the home component</div>
      <button onClick={() => console.log("hi...")}>Click Me</button>
    </div>
  );
};

export default {
  component: HomePage
};