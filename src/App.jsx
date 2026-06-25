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
      <section className="services">
  <h2>AI Agent Solutions</h2>

  <div className="cards">
    <div className="card">
      <h3>WhatsApp AI Agents</h3>
      <p>Automate customer support and lead generation.</p>
    </div>

    <div className="card">
      <h3>Business Automation</h3>
      <p>Automate workflows using AWS and AI.</p>
    </div>

    <div className="card">
      <h3>Custom AI Solutions</h3>
      <p>Tailored AI assistants for organizations.</p>
    </div>
  </div>
</section><section className="services">
  <h2>AWS Training Programs</h2>

  <div className="cards">
    <div className="card">
      <h3>AWS Cloud Practitioner</h3>
      <p>
        Learn cloud fundamentals and prepare for AWS certification.
      </p>
    </div>

    <div className="card">
      <h3>AWS Solutions Architect</h3>
      <p>
        Design scalable, secure and highly available AWS architectures.
      </p>
    </div>

    <div className="card">
      <h3>AWS DevOps & AI</h3>
      <p>
        Learn CI/CD, automation, AI services and modern cloud operations.
      </p>
    </div>
  </div>
</section>    
    </>
  );
}

export default App;