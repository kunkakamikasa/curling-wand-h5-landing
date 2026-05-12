"use client";

type PainPoint = {
  title: string;
  problem: string;
  solution: string;
  cue: string;
  visualLabel: string;
};

type HowStep = {
  title: string;
  description: string;
  cue: string;
  visualLabel: string;
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
    title: "Loose curls miss the tiny-barrel intent",
    problem: "Standard barrels often read too soft for shoppers who want a tighter curl pattern.",
    solution: "9mm sizing makes the definition look smaller, denser, and more visible on first glance.",
    cue: "Loose wave → tighter ringlet",
    visualLabel: "Curl pattern",
  },
  {
    title: "This is not an automatic curler",
    problem: "Cold traffic often lands with the wrong expectation because ‘curler’ language is too broad.",
    solution: "Show the slim manual wand shape early so the shopper understands the actual tool before clicking out.",
    cue: "Auto device ✕ / manual wand ✓",
    visualLabel: "Tool type",
  },
  {
    title: "Outbound clicks need more proof first",
    problem: "Pinterest and Instagram users bounce fast when the first click sends them to a shop page without context.",
    solution: "Put tool view, result direction, and quick education on-page before the outbound jump.",
    cue: "Explain first → click with intent",
    visualLabel: "Conversion flow",
  },
];

const howSteps: HowStep[] = [
  {
    title: "Section dry hair",
    description: "Use smaller sections so the 9mm barrel can build a tighter shape from root to end.",
    cue: "Small sections work best",
    visualLabel: "Prep",
  },
  {
    title: "Wrap thin strands around the barrel",
    description: "Less hair per wrap gives the tiny barrel room to create a clearer curl pattern.",
    cue: "Thin strand + slim barrel",
    visualLabel: "Wrap",
  },
  {
    title: "Hold, release, then repeat",
    description: "Let the curl cool before touching it so the finished look stays fuller and more defined.",
    cue: "Build texture section by section",
    visualLabel: "Finish",
  },
];

const resultCards: ResultCard[] = [
  {
    title: "Tighter curl definition",
    description: "Better for shoppers who want visible, small-pattern curls instead of a soft wave.",
    note: "Best fit for tiny curl intent",
  },
  {
    title: "More texture and volume",
    description: "Useful when flat or fine hair needs a more built-out finished look.",
    note: "Works well for layered styling looks",
  },
  {
    title: "Clearer purchase expectation",
    description: "The user understands what the wand is and what result it creates before landing on the product page.",
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
    <>
      <main className="landing-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">9mm tiny curling wand</p>
            <div className="hero-proof-mobile">
              <div className="hero-proof-mobile-head">
                <span className="visual-kicker">First-screen proof</span>
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
                    <p>Show the slim barrel shape immediately, before any long explanation starts.</p>
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
            </div>
            <h1>Tiny barrel curls that look tighter, fuller, and more defined.</h1>
            <p className="hero-subtitle">
              See the wand shape and the expected curl result right away, so cold social
              traffic knows what this tool is before clicking out.
            </p>
            <p className="hero-note">
              Not an automatic hair curler. This is a slim small barrel curling wand made
              for tighter curl definition, more visible texture, and a denser finish.
            </p>

            <div className="cta-group">
              <a className="cta-primary" href={productUrl} target="_blank" rel="noreferrer">
                Shop now
              </a>
              <a className="cta-secondary" href="#results">
                See curl results
              </a>
            </div>

            <ul className="trust-list">
              <li>See the tool shape before leaving for the shop page</li>
              <li>See the tighter curl direction before the outbound click</li>
            </ul>
          </div>

          <div className="hero-card hero-card-desktop">
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
            <h2>Answer the doubt fast, not with a wall of text.</h2>
            <p>
              Turn the biggest objections into quick visual cards so users can scan the logic
              before they bounce.
            </p>
          </div>

          <div className="pain-grid">
            {painPoints.map((item, index) => (
              <article className="pain-card enhanced-card" key={item.title}>
                <div className="card-topline">
                  <span className="card-index">0{index + 1}</span>
                  <span className="visual-pill">{item.visualLabel}</span>
                </div>
                <div className={`pain-visual pain-visual-${index + 1}`} aria-hidden="true">
                  <span className="pain-visual-label">{item.cue}</span>
                  <div className="pain-visual-stage">
                    <span className="mini-shape mini-shape-a" />
                    <span className="mini-arrow" />
                    <span className="mini-shape mini-shape-b" />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p className="pain-text pain-text-problem">{item.problem}</p>
                <div className="solution-chip">
                  <span className="pain-label">Solution</span>
                  <p>{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="how-it-works">
          <div className="section-heading narrow">
            <p className="section-kicker">How to use</p>
            <h2>Show the flow in 3 quick visual steps.</h2>
          </div>

          <div className="steps-grid">
            {howSteps.map((step, index) => (
              <article className="step-card enhanced-card" key={step.title}>
                <div className="card-topline">
                  <span className="step-index">0{index + 1}</span>
                  <span className="visual-pill">{step.visualLabel}</span>
                </div>
                <div className={`step-visual step-visual-${index + 1}`} aria-hidden="true">
                  <span className="step-visual-badge">{step.cue}</span>
                  <div className="step-visual-stage">
                    <span className="step-shape step-shape-main" />
                    <span className="step-shape step-shape-accent" />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="inline-cta">
            <div>
              <p className="section-kicker">Ready for the shop page?</p>
              <strong>See the tool, understand the result, then click out.</strong>
            </div>
            <a className="cta-primary inline-cta-button" href={productUrl} target="_blank" rel="noreferrer">
              Go to product page
            </a>
          </div>
        </section>

        <section className="content-section" id="results">
          <div className="section-heading">
            <p className="section-kicker">Visible results</p>
            <h2>Set expectation around the finished look before the outbound click.</h2>
            <p>
              This still needs real media, but the section now frames the exact visual proof
              the shopper expects to see before leaving the page.
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

      <div className="sticky-mobile-cta">
        <div className="sticky-mobile-copy">
          <strong>9mm tiny curling wand</strong>
          <span>Tighter, more defined curls</span>
        </div>
        <a className="cta-primary sticky-mobile-button" href={productUrl} target="_blank" rel="noreferrer">
          Shop now
        </a>
      </div>
    </>
  );
}
