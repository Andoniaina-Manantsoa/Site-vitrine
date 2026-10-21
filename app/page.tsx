export default function Home() {
  return (
    <div className="storefront">
      <div className="announcement-bar">
        Livraison offerte dès 100 € d’achat <span aria-hidden="true">·</span> Des essentiels faits pour durer
      </div>

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Maison Néroli, accueil">
          <span className="brand-mark" aria-hidden="true">N.</span>
          <span>maison néroli</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#collections">Nos collections</a>
          <a href="#maison">Notre maison</a>
          <a href="#engagements">Nos engagements</a>
        </nav>
        <a className="header-cta" href="#collections">
          Découvrir <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span /> L’art de se sentir chez soi</p>
            <h1>Le beau linge,<br />tout simplement<span>.</span></h1>
            <p className="hero-description">
              Des matières naturelles, des couleurs douces et des pièces pensées pour accompagner vos petits moments de bonheur.
            </p>
            <a className="button button-dark" href="#collections">Explorer la collection <span aria-hidden="true">→</span></a>
            <div className="hero-note">
              <div className="note-avatars" aria-hidden="true"><span>É</span><span>M</span><span>A</span></div>
              <p><strong>4,9/5</strong><br />aimé dans 1200+ maisons</p>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Chambre lumineuse habillée de linge de lit naturel">
            <div className="hero-label"><span>01 / 03</span><span>La douceur du lin lavé</span></div>
            <div className="hero-stamp"><span>Naturel</span><span>&</span><span>durable</span></div>
          </div>
          <div className="hero-side-note">DES INTÉRIEURS QUI NOUS RESSEMBLENT</div>
        </section>

        <section className="promise-row" id="engagements" aria-label="Nos engagements">
          <div><span className="promise-icon">✳</span><p><strong>Des matières choisies</strong><br />Lin, coton et douceur naturelle</p></div>
          <div><span className="promise-icon">⌂</span><p><strong>Imaginé avec soin</strong><br />Des pièces belles et durables</p></div>
          <div><span className="promise-icon">♡</span><p><strong>Livré chez vous</strong><br />Avec attention, partout en France</p></div>
        </section>

        <section className="collections section-wrap" id="collections">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pour chaque pièce, une intention</p>
              <h2>Les essentiels de la maison</h2>
            </div>
            <a className="text-link" href="#selection">Voir toute la collection <span aria-hidden="true">↗</span></a>
          </div>
          <div className="category-grid">
            <a className="category-card category-curtains" href="#selection">
              <span className="category-number">01</span>
              <span className="category-caption"><span><strong>Rideaux</strong><small>La lumière, en douceur</small></span><span className="round-arrow" aria-hidden="true">↗</span></span>
            </a>
            <a className="category-card category-bedding" href="#selection">
              <span className="category-number">02</span>
              <span className="category-caption"><span><strong>Linge de lit</strong><small>Le plaisir de ralentir</small></span><span className="round-arrow" aria-hidden="true">↗</span></span>
            </a>
            <a className="category-card category-table" href="#selection">
              <span className="category-number">03</span>
              <span className="category-caption"><span><strong>Art de la table</strong><small>Les jours à célébrer</small></span><span className="round-arrow" aria-hidden="true">↗</span></span>
            </a>
          </div>
        </section>

        <section className="selection section-wrap" id="selection">
          <div className="selection-copy">
            <p className="eyebrow">La sélection du moment</p>
            <h2>Un peu de douceur<br />dans le quotidien.</h2>
            <p>Housses de couette enveloppantes, nappes qui invitent à s’attarder… Découvrez les pièces que l’on aime retrouver, jour après jour.</p>
            <a className="text-link" href="#collections">Découvrir les nouveautés <span aria-hidden="true">→</span></a>
          </div>
          <div className="selection-image" role="img" aria-label="Table joliment dressée avec une nappe en lin">
            <span className="image-tag">Collection maison · 2025</span>
          </div>
          <div className="selection-aside"><span>Le quotidien<br />a tant de charme.</span><span className="aside-flower" aria-hidden="true">✳</span></div>
        </section>

        <section className="about-band" id="maison">
          <div className="about-image" role="img" aria-label="Détail d’un intérieur chaleureux aux matières naturelles" />
          <div className="about-copy">
            <p className="eyebrow">La maison néroli</p>
            <h2>Moins, mais<br /><em>tellement mieux.</em></h2>
            <p>Nous croyons aux intérieurs qui font du bien. À la beauté simple des matières naturelles, aux couleurs qui apaisent et aux objets que l’on garde longtemps.</p>
            <a className="text-link" href="#engagements">En savoir plus sur notre histoire <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="newsletter section-wrap">
          <div><p className="eyebrow">Une maison, mille inspirations</p><h2>Un peu de Néroli<br />dans votre boîte mail.</h2></div>
          <div className="newsletter-action"><p>Des idées déco, nos nouveautés et quelques attentions. Promis, juste ce qu’il faut.</p><a className="button button-outline" href="mailto:bonjour@maisonneroli.fr">Nous écrire <span aria-hidden="true">→</span></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#accueil"><span className="brand-mark" aria-hidden="true">N.</span><span>maison néroli</span></a>
        <p>Des maisons qui font du bien.</p>
        <span>© 2025 Maison Néroli · Fait avec douceur</span>
      </footer>
    </div>
  );
}
