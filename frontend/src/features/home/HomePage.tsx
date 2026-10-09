import { useState } from "react";

import {
  IconBrand,
  IconContracts,
  IconDashboard,
  IconLots,
  IconMenu,
  IconReceipts,
} from "../../components/Icons";
import "./HomePage.css";

const navigation = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const features = [
  {
    icon: <IconLots />,
    title: "Batch tracking",
    description: "See availability, ownership, and progress across every batch at a glance.",
  },
  {
    icon: <IconContracts />,
    title: "Contract management",
    description: "Keep agreements, customer details, and payment terms together.",
  },
  {
    icon: <IconReceipts />,
    title: "Payment records",
    description: "Record every payment and know exactly what is paid and what is due.",
  },
  {
    icon: <IconDashboard />,
    title: "Clear reports",
    description: "Turn day-to-day activity into a clear picture of your business.",
  },
];

const steps = [
  {
    number: "01",
    title: "Add your batches",
    description: "Organize your inventory into projects and batches, ready to track.",
  },
  {
    number: "02",
    title: "Manage each agreement",
    description: "Connect customers, contracts, and payment plans in one place.",
  },
  {
    number: "03",
    title: "Stay in control",
    description: "Review what is available, what is owed, and what needs attention.",
  },
];

export function HomePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="landing-page" id="home">
      <header className="landing-header">
        <div className="landing-nav-wrap">
          <a className="landing-brand" href="#home" onClick={closeMenu} aria-label="Boundary home">
            <span className="brand-mark landing-brand-mark">
              <IconBrand />
            </span>
            <span className="landing-brand-name">Boundary</span>
          </a>

          <button
            type="button"
            className="landing-menu-toggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="landing-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <IconMenu />
          </button>

          <nav
            id="landing-navigation"
            className={isMenuOpen ? "landing-navigation is-open" : "landing-navigation"}
            aria-label="Main navigation"
          >
            <div className="landing-nav-links">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="landing-nav-actions">
              <a className="landing-button landing-button-outline" href="/login">
                Login
              </a>
              <a className="landing-button landing-button-filled" href="/login">
                Sign up
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="landing-hero" aria-labelledby="landing-heading">
        <div className="landing-container landing-hero-grid">
          <div className="landing-hero-copy">
            <p className="landing-eyebrow">A clearer way to manage your business</p>
            <h1 id="landing-heading">
              Every batch.
              <br />
              Every detail.
              <br />
              <span>In good hands.</span>
            </h1>
            <p className="landing-hero-description">
              Bring batches, contracts, and payments together—so you can spend less time
              chasing details and more time moving forward.
            </p>
            <div className="landing-hero-actions">
              <a className="landing-button landing-button-filled landing-button-large" href="/login">
                Get started
                <span aria-hidden="true">→</span>
              </a>
              <a className="landing-button landing-button-text landing-button-large" href="#features">
                Learn more
              </a>
            </div>
            <p className="landing-hero-note">Simple tools for the work you do every day.</p>
          </div>

          <div className="landing-visual" aria-label="Illustration of a batch management dashboard">
            <div className="landing-visual-orbit landing-visual-orbit-one" />
            <div className="landing-visual-orbit landing-visual-orbit-two" />
            <div className="landing-dashboard-card">
              <div className="landing-dashboard-heading">
                <div>
                  <span className="landing-dashboard-kicker">OVERVIEW</span>
                  <h2>Your business, at a glance</h2>
                </div>
                <span className="landing-dashboard-icon">
                  <IconDashboard />
                </span>
              </div>

              <div className="landing-dashboard-stats">
                <div className="landing-stat">
                  <span>Active batches</span>
                  <strong>08</strong>
                  <small>Across 3 projects</small>
                </div>
                <div className="landing-stat landing-stat-highlight">
                  <span>Payments received</span>
                  <strong>$24,850</strong>
                  <small className="landing-stat-positive">↑ 12% this month</small>
                </div>
              </div>

              <div className="landing-progress">
                <div className="landing-progress-heading">
                  <span>Batch progress</span>
                  <span>June overview</span>
                </div>
                <div className="landing-progress-bars" aria-hidden="true">
                  <i style={{ height: "44%" }} />
                  <i style={{ height: "68%" }} />
                  <i style={{ height: "53%" }} />
                  <i style={{ height: "82%" }} />
                  <i style={{ height: "62%" }} />
                  <i style={{ height: "92%" }} />
                  <i style={{ height: "73%" }} />
                  <i style={{ height: "100%" }} />
                </div>
                <div className="landing-progress-labels">
                  <span>Week 1</span>
                  <span>Week 4</span>
                </div>
              </div>

              <div className="landing-dashboard-footer">
                <span className="landing-status-dot" />
                Everything is up to date
              </div>
            </div>
            <div className="landing-floating-note">
              <span className="landing-floating-check">✓</span>
              Payment recorded
              <strong>$1,250.00</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section landing-features" id="features" aria-labelledby="features-heading">
        <div className="landing-container">
          <div className="landing-section-heading">
            <p className="landing-eyebrow">Everything in its place</p>
            <h2 id="features-heading">The details that keep things moving</h2>
            <p>One steady workspace for the moving parts behind every successful project.</p>
          </div>
          <div className="landing-feature-grid">
            {features.map((feature) => (
              <article className="landing-feature-card" key={feature.title}>
                <span className="landing-feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="/login" aria-label={`Explore ${feature.title}`}>
                  Explore feature <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="landing-section landing-how"
        id="how-it-works"
        aria-labelledby="how-heading"
      >
        <div className="landing-container">
          <div className="landing-section-heading">
            <p className="landing-eyebrow">A simpler routine</p>
            <h2 id="how-heading">Up and running in three steps</h2>
            <p>Start with what you have. Build a clearer picture as you go.</p>
          </div>
          <div className="landing-steps">
            {steps.map((step) => (
              <article className="landing-step" key={step.number}>
                <span className="landing-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-cta" id="pricing" aria-labelledby="cta-heading">
        <div className="landing-container landing-cta-inner">
          <div>
            <p className="landing-eyebrow">Simple, straightforward pricing</p>
            <h2 id="cta-heading">One clear workspace for every project.</h2>
            <p>
              Keep batches, contracts, and payment records organized as your operation grows.
            </p>
          </div>
          <a className="landing-button landing-button-light landing-button-large" href="/login">
            Get started
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="landing-footer" id="contact">
        <div className="landing-container landing-footer-inner">
          <a className="landing-brand landing-footer-brand" href="#home">
            <span className="brand-mark landing-brand-mark">
              <IconBrand />
            </span>
            <span className="landing-brand-name">Boundary</span>
          </a>
          <p>Thoughtful tools for keeping your business in good order.</p>
          <div className="landing-footer-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="/login">Contact</a>
          </div>
          <span className="landing-copyright">© {new Date().getFullYear()} Boundary</span>
        </div>
      </footer>
    </main>
  );
}
