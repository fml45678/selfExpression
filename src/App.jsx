import React from "react";

import "./App.css";

function App() {
  return (
    <div className="home">
      <video
        src="selfExpressionBackground.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div>
        <h1 id="title">Self Expression</h1>
        <h3 id="name">by Yiseul LeMieux</h3>
      </div>
      <div className="expContainer">
        <p id="explanation">
          Self Expression is a collective interdisciplinary work that began from
          the idea of having a “safe space” to express who I really am. Safe
          space and self expression are quite popular terms, and often these are
          used in the same context. As a human being and an artist, I often feel
          that my self expression is not accepted and instead discouraged, and
          because of that it is hard to believe that there is a space for me or
          someone like me. Through many years of frustration from rejection,
          discouragement, and isolation, I have been analyzing myself both as an
          artist and a human. This work is a reflection of a partial conclusion
          from this analysis and my move towards self expression.
        </p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ADZYn3cOp-o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>
        <p id="explanation">
          for booking information contact info@yiseullemieux.com
        </p>
        <p id="explanation">
          for more of Yiseul's work visit her{" "}
          <a href="https://yiseullemieux.com">website</a>
        </p>
      </div>
    </div>
  );
}

export default App;
