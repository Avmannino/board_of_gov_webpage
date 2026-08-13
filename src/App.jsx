import { useState } from "react";
import "./App.css";
import Footer from "./Footer";

const officers = [
  {
    role: "President",
    name: "Harry Schwefel",
  },
  {
    role: "Vice President",
    name: "Peter Boldt",
  },
  {
    role: "Treasurer",
    name: "Marc Lisker",
  },
  {
    role: "Secretary",
    name: "Jon Erensen",
  },
];

const governorClasses = [
  {
    year: "2027",
    members: [
      "Amy Berkey",
      "Amanda Donnegar",
      "Jon Erensen",
      "Robin Prince",
      "Rob Scaramella",
    ],
  },
  {
    year: "2028",
    members: [
      "Peter Boldt",
      "Chris Corrinet",
      "Marc Lisker",
      "Austin Saypol",
      "Harry Schwefel",
    ],
  },
  {
    year: "2029",
    members: [
      "Stu Brown",
      "Jamie Denis",
      "Daryl Jones",
      "Sarah Orum",
      "Chris Ward",
    ],
  },
];

function GovernorClassCard({ governorClass }) {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <article className="governor-card">
      {!logoMissing && (
        <div className="governor-card__logo-accent" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}gsc-logo-two.png`}
            alt=""
            onError={() => setLogoMissing(true)}
          />
        </div>
      )}

      <div className="governor-card__header">
        <h3>Class of {governorClass.year}</h3>
      </div>

      <ul className="governor-card__list">
        {governorClass.members.map((member) => (
          <li key={member}>
            <span className="governor-card__marker" aria-hidden="true" />
            <span>{member}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RepresentativeCard() {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <article className="representative-card">
      {!logoMissing && (
        <div className="representative-card__logo-accent" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}gcds-logo.png`}
            alt=""
            onError={() => setLogoMissing(true)}
          />
        </div>
      )}

      <div className="representative-card__header">
        <h3>GCDS Representative</h3>
      </div>

      <p className="representative-card__name">Bill Auerswald</p>
    </article>
  );
}

function App() {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <div className="board-page">
      <header className="hero">
        {!logoMissing && (
          <div className="hero__logo-accent" aria-hidden="true">
            <img
              src={`${import.meta.env.BASE_URL}gsc-logo.png`}
              alt=""
              onError={() => setLogoMissing(true)}
            />
          </div>
        )}

        <div className="page-container">
          <div className="hero__content">
            <h1 className="hero__title">
              Board of
              <span>Governors</span>
            </h1>

            <div className="hero__season">
              <span className="hero__season-line" />
              <span>2026–2027 Season</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="officers-section" id="officers">
          <div className="page-container">
            <ul className="officer-list">
              {officers.map((officer) => (
                <li key={officer.role} className="officer-list__item">
                  <span className="officer-list__role">{officer.role}</span>
                  <span className="officer-list__name">{officer.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="governors-section" id="governors">
          <div className="page-container">
            <div className="governors-panel">
              <div className="governor-grid">
                {governorClasses.map((governorClass) => (
                  <GovernorClassCard
                    key={governorClass.year}
                    governorClass={governorClass}
                  />
                ))}
              </div>

              <RepresentativeCard />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;