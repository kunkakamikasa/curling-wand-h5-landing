"use client";

type PainPoint = {
  title: string;
  problem: string;
  solution: string;
};

type HowStep = {
  title: string;
  description: string;
};

type ResultCard = {
  title: string;
  description: string;
  note: string;
};

const productUrl = "https://www.tiktok.com/";

const painPoints: PainPoint[] = [
  {
    title: "Most curlers make the curl too loose",
    problem:
      "If you want tiny, defined curls or a fuller textured look, a standard barrel usually leaves the result too soft and too wide.",
    solution:
      "A 9mm small barrel is built for tighter curl definition, more visible texture, and a look that reads clearly on short, layered, or fine hair.",
  },
  {
    title: "Automatic curlers are not the same tool",
    problem:
      "A lot of shoppers land with the wrong expectation because the market overuses 'curler' language for automatic devices.",
    solution:
      "This page positions the product correctly as a tiny curling wand / small barrel curling wand, so the buyer understands the styling result before clicking out.",
  },
  {
    title: "External shop links lose cold traffic fast",
    problem:
      "Pinterest and Instagram users often bounce if the first click sends them straight to a marketplace page with no context.",
    solution:
      "This H5 pre-sells the product first: what it does, who it is for, how to use it, and what result to expect before the purchase jump.",
  },
];

const howSteps: HowStep[] = [
  {
    title: "Start with dry, sectioned hair",
    description:
      "Clip hair into small sections so the 9mm barrel can wrap evenly and build a more defined shape from root to end.",
  },
  {
    title: "Wrap a thin strand around the barrel",
    description:
      "Use smaller strands than you would with a standard wand. That is what creates the tighter curl pattern this tool is meant for.",
  },
  {
    title: "Hold, release, then repeat",
    description:
      "Let each curl cool before touching it. Repeat section by section until you build the overall texture, volume, and shape you want.",
  },
];

const resultCards: ResultCard[] = [
  {
    title: "Tighter curl definition",
    description:
      "Better for shoppers who want visible, small-pattern curls instead of a soft wave.",
    note: "Best fit for tiny curl intent",
  },
  {
    title: "More texture and volume",
    description:
      "Useful when flat or fine hair needs a more built-out finished look.",
    note: "Works well for layered styling looks",
  },
  {
    title: "Clearer purchase expectation",
    description:
      "The user understands what the wand is and what result it creates before landing on the product page.",
    note: "Reduces mismatch-driven drop-off",
  },
];

export default function LandingPageClient() {
  return (
    <main className="landing-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">9mm tiny curling wand</p>
          <h1>Small barrel curls with a tighter, more defined finish.</h1>
          <p className="hero-subtitle">
            Built for Pinterest and Instagram traffic that needs one more layer of
            explanation before the purchase click.
          </p>
          <p className="hero-note">
            This is not an automatic hair curler. It is a small barrel curling wand
            for shoppers who want tighter curls, more texture, and a more visible
            curl pattern.
          </p>

          <div className="cta-group">
            <a className="cta-primary" href={productUrl} target="_blank" rel="noreferrer">
              Shop now
            </a>
            <a className="cta-secondary" href="#how-it-works">
              See how it works
            </a>
          </div>

          <ul className="trust-list">
            <li>Correctly framed as a tiny curling wand, not an automatic curler</li>
            <li>Built to explain the value before sending traffic to the product page</li>
            <li>Focused on mobile-first natural traffic conversion</li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-visual">
            <span className="visual-kicker">Hero</span>
            <h2>Mobile-first pre-sell layer for social traffic</h2>
            <p>
              First-screen messaging clarifies the product type, the styling result,
              and why this tool is different from a standard wider barrel.
            </p>
            <div className="hero-metrics">
              <div>
                <strong>PRODUCT</strong>
                <span>9mm tiny curling wand</span>
              </div>
              <div>
                <strong>TRAFFIC</strong>
                <span>Pinterest / Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="pain-solution">
        <div className="section-heading">
          <p className="section-kicker">Pain points → solution</p>
          <h2>Answer the doubt before the user lands on the shop page.</h2>
          <p>
            The first version focuses on already confirmed pain points and keeps the
            structure stable for later copy iteration.
          </p>
        </div>

        <div className="pain-grid">
          {painPoints.map((item, index) => (
            <article className="pain-card" key={item.title}>
              <span className="card-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p className="pain-label">Pain</p>
              <p>{item.problem}</p>
              <p className="pain-label">Solution</p>
              <p>{item.solution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="how-it-works">
        <div className="section-heading narrow">
          <p className="section-kicker">How to use</p>
          <h2>Show the usage flow in the simplest possible way.</h2>
        </div>

        <div className="steps-grid">
          {howSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="results">
        <div className="section-heading">
          <p className="section-kicker">Visible results</p>
          <h2>Set expectation around the finished look before the outbound click.</h2>
          <p>
            This section is a first-pass placeholder for future result media, while
            the structure stays fixed.
          </p>
        </div>

        <div className="results-grid">
          {resultCards.map((card) => (
            <article className="result-card" key={card.title}>
              <div className="result-media-placeholder">
                <span>Result media placeholder</span>
              </div>
              <div className="result-body">
                <strong>{card.title}</strong>
                <p>{card.description}</p>
                <span>{card.note}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-cta">
        <div>
          <p className="section-kicker">Ready to click through?</p>
          <h2>See the product page after you understand the use case.</h2>
          <p>
            This keeps cold social traffic from jumping straight into an external
            marketplace page without context.
          </p>
        </div>
        <a className="cta-primary bottom-cta-button" href={productUrl} target="_blank" rel="noreferrer">
          Go to product page
        </a>
      </section>
    </main>
  );
}
