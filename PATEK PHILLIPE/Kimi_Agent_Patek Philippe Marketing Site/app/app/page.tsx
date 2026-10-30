"use client";

import { useEffect } from "react";
import "./globals.css";

export default function Page() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <>
      {/* 1. Hero */}
      <header className="hero" id="top">
        <div className="hero-bg" aria-hidden="true">
          <img src="/img/hero.jpg" alt="" />
        </div>
        <div className="hero-shade" aria-hidden="true"></div>
        <nav className="nav" id="nav" aria-label="Main">
          <a className="brand" href="#top">
            <span className="name">Patek Philippe</span>
            <span className="sub">Geneva, since 1839</span>
          </a>
          <ul className="navlinks">
            <li><a href="#heritage">Heritage</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#craft">Craftsmanship</a></li>
            <li><a href="#rarity">Rarity</a></li>
            <li><a href="#service">Service</a></li>
          </ul>
          <a className="cta-small" href="#acquire">Request a private viewing</a>
        </nav>
        <div className="hero-inner wrap">
          <span className="kicker">Manufacture d'horlogerie, Geneva</span>
          <h1>You never actually own a Patek Philippe.</h1>
          <p className="sub">
            You merely look after it for the next generation. Independence, tradition, and
            hand finishing since 1839.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-gold" href="#collections">Explore the collections</a>
            <a className="btn btn-ghost" href="#heritage">Our heritage</a>
          </div>
        </div>
        <span className="scroll-hint" aria-hidden="true">Scroll</span>
      </header>

      {/* 2. Stats band */}
      <section className="stats" aria-label="Key figures">
        <div className="stats-grid">
          <div className="stat reveal"><div className="num">1839</div><div className="lbl">Founded in Geneva</div></div>
          <div className="stat reveal"><div className="num">87</div><div className="lbl">Years under the Stern family</div></div>
          <div className="stat reveal"><div className="num">&lt;70k</div><div className="lbl">Timepieces produced each year</div></div>
          <div className="stat reveal"><div className="num">100</div><div className="lbl">Years of after sales service</div></div>
        </div>
      </section>

      {/* 3. Heritage timeline */}
      <section className="heritage" id="heritage">
        <div className="wrap">
          <span className="kicker reveal">One family, one city</span>
          <h2 className="h2 reveal">Six generations of independent watchmaking.</h2>
          <p className="lead reveal">
            Never sold, never hurried. The manufacture answers only to its own standards,
            set in Geneva and guarded by the Stern family for almost a century.
          </p>
          <div className="timeline">
            <div className="t-item reveal">
              <div className="year">1839</div>
              <h3>The founding</h3>
              <p>Antoni Patek and Adrien Philippe unite Polish artistry with French engineering in Geneva.</p>
            </div>
            <div className="t-item reveal">
              <div className="year">1932</div>
              <h3>The Stern era</h3>
              <p>The Stern family acquires the maison, beginning an unbroken line of family stewardship.</p>
            </div>
            <div className="t-item reveal">
              <div className="year">2009</div>
              <h3>The Patek Philippe Seal</h3>
              <p>The manufacture replaces the Geneva Seal with its own, stricter standard for every component.</p>
            </div>
            <div className="t-item reveal">
              <div className="year">Today</div>
              <h3>Unlisted and independent</h3>
              <p>Still family owned, still produced in Geneva, still scarce by deliberate choice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Collections */}
      <section className="collections" id="collections">
        <div className="wrap">
          <span className="kicker reveal">The collections</span>
          <h2 className="h2 reveal">Three silhouettes, one signature.</h2>
          <div className="coll-grid">
            <article className="coll-card reveal">
              <div className="coll-img"><img src="/img/nautilus.jpg" alt="Steel sports watch with a deep blue embossed dial" /></div>
              <div className="coll-body">
                <h3>Nautilus <span>1976</span></h3>
                <p>The porthole inspired icon in steel and gold, arguably the most coveted sports watch ever made.</p>
                <a className="coll-link" href="#acquire">Request availability</a>
              </div>
            </article>
            <article className="coll-card reveal">
              <div className="coll-img"><img src="/img/calatrava.jpg" alt="Yellow gold dress watch with an ivory enamel dial" /></div>
              <div className="coll-body">
                <h3>Calatrava <span>1932</span></h3>
                <p>The pure round dress watch, a study in restraint, proportion, and grand feu enamel.</p>
                <a className="coll-link" href="#acquire">Request availability</a>
              </div>
            </article>
            <article className="coll-card reveal">
              <div className="coll-img"><img src="/img/aquanaut.jpg" alt="Gold sports watch with a black embossed dial" /></div>
              <div className="coll-body">
                <h3>Aquanaut <span>1997</span></h3>
                <p>The contemporary companion, youthful in line yet finished to the same uncompromising standard.</p>
                <a className="coll-link" href="#acquire">Request availability</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Craftsmanship split */}
      <section className="craft" id="craft">
        <div className="wrap split">
          <div className="split-img reveal">
            <img src="/img/craft.jpg" alt="A watchmaker assembling a movement by hand under warm workshop light" />
          </div>
          <div>
            <span className="kicker reveal">The atelier</span>
            <h2 className="h2 reveal">Machines make parts. Hands make watches.</h2>
            <ul className="feat-list">
              <li className="reveal"><span className="n">I</span><div><h4>Hand finishing</h4><p>Every bridge and plate is beveled, polished, and engraved by a single artisan, even where no eye will ever see it.</p></div></li>
              <li className="reveal"><span className="n">II</span><div><h4>Grand feu enamel</h4><p>Dial blanks fired at over eight hundred degrees, a discipline mastered by only a handful of living artisans.</p></div></li>
              <li className="reveal"><span className="n">III</span><div><h4>Complications</h4><p>Minute repeaters, perpetual calendars, and world timers, assembled where one movement can take years.</p></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Rarity quote band */}
      <section className="rarity" id="rarity">
        <div className="rarity-bg" aria-hidden="true"><img src="/img/salon.jpg" alt="" /></div>
        <div className="rarity-inner">
          <span className="kicker reveal">Rarity and value</span>
          <h2 className="h2 reveal">Scarcity is not a strategy. It is a consequence.</h2>
          <blockquote className="reveal">
            With fewer than seventy thousand timepieces a year, demand has outpaced the
            atelier for decades. The waiting list is the brand.
          </blockquote>
          <cite className="reveal">The economics of the maison</cite>
        </div>
      </section>

      {/* 7. Service split, reversed */}
      <section className="service" id="service">
        <div className="wrap split rev">
          <div>
            <span className="kicker reveal">Service and provenance</span>
            <h2 className="h2 reveal">A century of care, archived in Geneva.</h2>
            <p className="lead reveal">
              Every timepiece ever produced is recorded in the manufacture's archives, and every
              one can be serviced, restored, and authenticated for a hundred years and beyond.
            </p>
            <ul className="feat-list">
              <li className="reveal"><span className="n">i</span><div><h4>Lifetime restoration</h4><p>From a 1900 minute repeater to this year's release, parts are made, not sourced.</p></div></li>
              <li className="reveal"><span className="n">ii</span><div><h4>Authenticated provenance</h4><p>An extract from the archive confirms the history of your piece, generation after generation.</p></div></li>
            </ul>
          </div>
          <div className="split-img reveal">
            <img src="/img/salon.jpg" alt="The Geneva salon, dark walnut and brass vitrines under warm light" />
          </div>
        </div>
      </section>

      {/* 8. Acquisition steps */}
      <section className="acquire" id="acquire">
        <div className="wrap">
          <span className="kicker reveal">Acquisition</span>
          <h2 className="h2 reveal">Begin the conversation.</h2>
          <p className="lead reveal">
            Allocation is personal. Our Geneva salon receives collectors by appointment,
            and every request is answered individually.
          </p>
          <div className="steps">
            <div className="step reveal"><div className="n">1</div><h3>Private consultation</h3><p>A dedicated advisor discusses your collection, your references, and the pieces that suit it.</p></div>
            <div className="step reveal"><div className="n">2</div><h3>Allocation</h3><p>Pieces are offered in sequence. Rare references follow their own calendar, not yours.</p></div>
            <div className="step reveal"><div className="n">3</div><h3>Delivery and registry</h3><p>Your piece is registered, its archive opened, and its after sales care begins that day.</p></div>
          </div>
          <div className="hero-ctas reveal" style={{ marginTop: 56 }}>
            <a className="btn btn-gold" href="mailto:salon@example.ch?subject=Private%20viewing%20request">Request a private viewing</a>
            <a className="btn btn-ghost" href="#collections">Review the collections</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="fbrand">
            <span className="name serif" style={{ fontSize: 22, letterSpacing: "0.14em" }}>Patek Philippe</span>
            <p>An independent homage page. Not affiliated with the manufacture. Rue du Rhone, Geneva.</p>
          </div>
          <div><h4>Maison</h4><ul><li><a href="#heritage">Heritage</a></li><li><a href="#craft">Craftsmanship</a></li><li><a href="#rarity">Rarity</a></li></ul></div>
          <div><h4>Collections</h4><ul><li><a href="#collections">Nautilus</a></li><li><a href="#collections">Calatrava</a></li><li><a href="#collections">Aquanaut</a></li></ul></div>
          <div><h4>Contact</h4><ul><li><a href="#acquire">Private viewing</a></li><li><a href="#service">After sales service</a></li><li><a href="mailto:salon@example.ch">salon@example.ch</a></li></ul></div>
        </div>
        <div className="wrap footer-bottom">
          <span>Geneva, Switzerland. Independent since 1839.</span>
          <span>An educational tribute. All imagery is generated.</span>
        </div>
      </footer>
    </>
  );
}
