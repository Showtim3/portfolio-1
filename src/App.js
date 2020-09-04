import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>HELLO 	&#128075;, I'M MUKUL KUMAR JHA!</h1>
        <span> <i>I'm experienced with React, Redux, React-Native, NextJS, S/CSS, Antd, Typescript, GraphQL, Node, Express.js, Firebase and lots of other technologies</i> &#128526;</span>
      </div>
      <div className="links-container">
        <a
            id="linkedin"
            href={"https://www.linkedin.com/in/mukul-kr-jha/"}
            aria-label={"LinkedIn Profile"}
            tabIndex={0}
        />
        <a
            id="github"
            href={"https://github.com/mukul-kmr-jha"}
            aria-label={"Github Profile"}
            tabIndex={0}
        />
        <a
            id="stackoverflow"
            href={"https://stackoverflow.com/users/9312233/code-it-up?tab=profile"}
            aria-label={"StackOverflow Profile"}
            tabIndex={0}
        />
          <a
              id="twitter"
              href={"https://twitter.com/Mukulkrjha2"}
              aria-label={"Twitter Profile"}
              tabIndex={0}
          />
      </div>
    </div>
  );
}

export default App;
