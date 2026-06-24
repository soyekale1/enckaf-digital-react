import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Enckaf Digital</h2>

        <ul>
          <li>Home</li>
          <li>AWS Cloud</li>
          <li>AI Agents</li>
          <li>Training</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>AWS Cloud & AI Solutions</h1>

        <p>
          Helping businesses adopt AWS Cloud, AI Automation,
          AI Agents and Digital Transformation.
        </p>

        <button>Book Consultation</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">

          <div className="card">
            <h3>AWS Cloud</h3>
            <p>
              Architecture, Migration, Security and Cloud Optimization.
            </p>
          </div>

          <div className="card">
            <h3>AI Agents</h3>
            <p>
              WhatsApp AI Agents, Customer Support Bots and Automation.
            </p>
          </div>

          <div className="card">
            <h3>Training</h3>
            <p>
              AWS Cloud Training for Students and Professionals.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;