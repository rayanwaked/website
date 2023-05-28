import "./app.css";

function App() {
  return (
    <div className="snowfall">
      <div className="image">
        <img src="winter.gif" alt="winter gif" />
      </div>

      <h1>waked.dev</h1>

      <div className="navigation">
        <h3>
          <a href="https://linkedin.com/in/rayanwaked">linkedin</a>
        </h3>
        <h3>
          <a href="https://github.com/rayanwaked">github</a>
        </h3>
        <h3>
          <a href="mailto: rayan@waked.dev">contact</a>
        </h3>
      </div>

      <div className="body">
        <h2>Welcome</h2>
        <p>
          Hello! I'm Rayan, an iOS and UX Engineer. I develop and design
          applications for iOS, iPadOS, watchOS, and macOS. My main tech stack
          consists of Swift and SwiftUI. However, I'm also well aquainted with
          HTML, CSS, Typescript, React, and Ionic.
        </p>

        <h2>Projects</h2>
        <p>
          Boston — an iOS, iPadOS, and macOS app that connects Siri with
          OpenAI's language learning models. Enables Siri to answer complex
          questions and requests.
        </p>
        <p>Fog — a secret project in the works! Keep an eye out for updates.</p>
      </div>
    </div>
  );
}

export default App;
