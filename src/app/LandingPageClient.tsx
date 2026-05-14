"use client";

const productUrl = "https://www.tiktok.com/";

const assets = {
  hero: "/curling-wand/product-9mm-wand.jpg",
  beforeAfter: "/curling-wand/before-after-tight-curls.jpg",
  safety: "/curling-wand/heat-control-safety.jpg",
  adultFrame: "/curling-wand/ugc-curl-result-adult-frame.jpg",
  sample1: "/curling-wand/curling_wand__sample1.mp4",
  sample2: "/curling-wand/curling_wand__sample2.mp4",
};

const proofCards = [
  {
    title: "Tiny 9mm barrel",
    text: "Creates tighter, more defined curl patterns than a standard loose-wave barrel.",
  },
  {
    title: "Manual wand control",
    text: "Wrap smaller sections around the slim barrel for texture that looks fuller and more intentional.",
  },
  {
    title: "Built for social traffic",
    text: "Shows the product, result, and safety cues before sending shoppers to the product page.",
  },
];

const steps = [
  "Start with dry hair and smaller sections.",
  "Wrap thin strands around the 9mm barrel.",
  "Release, cool, then finger-comb for fuller texture.",
];

export default function LandingPageClient() {
  return (
    <>
      <main className="landing-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">9mm tiny curling wand</p>
            <h1>Get tighter curls without a salon appointment.</h1>
            <p className="hero-subtitle">
              A slim 9mm curling wand made for defined ringlets, fuller texture, and fast
              scroll-stopping hair videos.
            </p>

            <div className="hero-mobile-media">
              <video
                className="hero-video"
                src={assets.sample1}
                poster={assets.hero}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="cta-group">
              <a className="cta-primary" href={productUrl} target="_blank" rel="noreferrer">
                Shop the 9mm wand
              </a>
              <a className="cta-secondary" href="#results">
                Watch results
              </a>
            </div>

            <ul className="trust-list">
              <li>Small barrel for tighter curl definition</li>
              <li>Quick styling demo before the product click</li>
              <li>Heat-control and safety cues shown up front</li>
            </ul>
          </div>

          <div className="hero-card hero-desktop-media">
            <video
              className="hero-video"
              src={assets.sample1}
              poster={assets.hero}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="hero-video-caption">
              <span>Real result preview</span>
              <strong>Tiny barrel. Bigger texture. Tighter finish.</strong>
            </div>
          </div>
        </section>

        <section className="content-section product-proof" id="results">
          <div className="section-heading">
            <p className="section-kicker">See the result first</p>
            <h2>Tighter curl definition in seconds.</h2>
            <p>
              Show shoppers the curl outcome before they leave the landing page, so the product
              click feels obvious instead of random.
            </p>
          </div>

          <div className="media-grid">
            <article className="media-card large-media-card">
              <video src={assets.sample2} poster={assets.beforeAfter} autoPlay muted loop playsInline />
              <div>
                <span>Before / after proof</span>
                <strong>Loose strands become defined, bouncy ringlets.</strong>
              </div>
            </article>
            <article className="media-card">
              <img src={assets.adultFrame} alt="Tight curl result from the 9mm curling wand" />
              <div>
                <span>UGC-style result</span>
                <strong>Looks like a quick social demo, not a catalog shot.</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section split-section">
          <div className="section-heading compact">
            <p className="section-kicker">Why it works</p>
            <h2>Small barrel, visible payoff.</h2>
            <p>
              The page now focuses on the exact buying belief: this wand is slim, manual, and
              designed for tighter curl patterns.
            </p>
          </div>

          <div className="proof-grid">
            {proofCards.map((card) => (
              <article className="proof-card" key={card.title}>
                <strong>{card.title}</strong>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section how-section">
          <div className="section-heading compact">
            <p className="section-kicker">How to style</p>
            <h2>Three quick steps.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section safety-section">
          <div className="safety-image-wrap">
            <img src={assets.safety} alt="Curling wand heat control and safety reminder" />
          </div>
          <div className="section-heading compact">
            <p className="section-kicker">Heat control reminder</p>
            <h2>Style with smaller sections and steady control.</h2>
            <p>
              Keep the product expectation clear: this is a manual tiny-barrel wand for users who
              want more control over tight curl styling.
            </p>
            <a className="cta-primary" href={productUrl} target="_blank" rel="noreferrer">
              Go to product page
            </a>
          </div>
        </section>
      </main>

      <div className="sticky-mobile-cta">
        <div className="sticky-mobile-copy">
          <strong>9mm tiny curling wand</strong>
          <span>Tighter curls, fuller texture</span>
        </div>
        <a className="cta-primary sticky-mobile-button" href={productUrl} target="_blank" rel="noreferrer">
          Shop now
        </a>
      </div>
    </>
  );
}
