import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getCatFact = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (err) {
      setFact("Could not load cat fact.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <main className="app-container">
      <header>
        <h1>Random Cat Facts 🐾</h1>
      </header>

      <section className="grid-layout">
        <article className="fact-card">
          <img
            src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
            alt="Cute cat"
            className="cat-image"
          />

          <p className="fact-text">{loading ? "Loading..." : fact}</p>
        </article>
      </section>

      <button className="new-fact-btn" onClick={getCatFact}>
        New Cat Fact
      </button>

      <footer>
        <p>
          View the code on GitHub:{" "}
          <a
            href="https://github.com/YOUR-USERNAME/YOUR-REPO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository Link
          </a>
        </p>
      </footer>
    </main>
  );
}
