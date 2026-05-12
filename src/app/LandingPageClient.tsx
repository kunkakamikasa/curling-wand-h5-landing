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

type HeroProof = {
  title: string;
  detail: string;
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

const heroProofs: HeroProof[] = [
  {
    title: "What the shopper should see first",
    detail: "The actual wand shape, slim barrel size, and a more realistic product silhouette.",
  },
  {
    title: "What result they need to believe",
    detail: "Tighter ringlet-style definition, more texture, and a more visible curl finish than a standard barrel.",
  },
  {
    title: "Why this fixes the bounce problem",
    detail: "Cold Pinterest / Instagram traffic gets visual evidence before the outbound shop click.",
  },
];

export default function LandingPageClient() {
  return (
    <main className="landing-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">9mm tiny curling wand</p>
          <h1>Show the wand and the curl result in the first screen.</h1>
          <p className="hero-subtitle">
            Cold Pinterest and Instagram traffic should immediately understand what the
            product looks like and what kind of curl result it creates.
          </p>
          <p className="hero-note">
            This is not an automatic hair curler. It is a slim small barrel curling
            wand for tighter curl definition, more visible texture, and a denser
            finished shape.
          </p>

          <div className="cta-group">
            <a className="cta-primary" href={productUrl} target="_blank" rel="noreferrer">
              Shop now
            </a>
            <a className="cta-secondary" href="#results">
              See curl results
            </a>
            <a className="cta-secondary" href="#how-it-works">
              See how it works
            </a>
          </div>

          <ul className="trust-list">
            <li>Lead with visual product evidence instead of only explanatory copy</li>
            <li>Clarify the product type before the marketplace click</li>
            <li>Use result-first framing for cold social traffic</li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-visual hero-proof-visual">
            <div className="hero-visual-top">
              <span className="visual-kicker">Above the fold proof</span>
              <div className="hero-badge-row">
                <span className="hero-badge">Product view</span>
                <span className="hero-badge">Result preview</span>
              </div>
            </div>

            <div className="hero-proof-stage">
              <div className="product-shot-card">
                <div className="wand-product-illustration" aria-hidden="true">
                  <span className="wand-tip" />
                  <span className="wand-barrel" />
                  <span className="wand-handle" />
                  <span className="wand-cord" />
                </div>
                <div className="product-shot-copy">
                  <strong>9mm small barrel wand</strong>
                  <p>Slim barrel shape shown directly in the hero instead of hiding it below the fold.</p>
                </div>
              </div>

              <div className="result-preview-card">
                <div className="result-preview-head">
                  <span>Expected look</span>
                  <strong>Tighter, more defined curls</strong>
                </div>
                <div className="curl-preview-grid" aria-hidden="true">
                  <div className="curl-preview before-state">
                    <span className="preview-tag">Before</span>
                    <span className="hair-shape hair-shape-before" />
                  </div>
                  <div className="curl-preview after-state">
                    <span className="preview-tag">After</span>
                    <span className="hair-shape hair-shape-after" />
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-proof-list">
              {heroProofs.map((item) => (
                <article className="hero-proof-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
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
            This first version still needs real media, but the section now frames the
            exact visual proof the shopper expects to see before leaving the page.
          </p>
        </div>

        <div className="results-grid">
          {resultCards.map((card) => (
            <article className="result-card" key={card.title}>
              <div className="result-media-placeholder">
                <div className="result-placeholder-visual" aria-hidden="true">
                  <span className="result-chip">Preview</span>
                  <span className="result-hair result-hair-top" />
                  <span className="result-hair result-hair-bottom" />
                </div>
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
