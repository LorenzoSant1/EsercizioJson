document.addEventListener("DOMContentLoaded", function () {
  const pageData = {
      "pageTitle": "Le Socket",
      "favicon": "assets/favicon.ico",
      "navbar": {
          "homeLink": "Home Page",
          "menuItems": [
              { "text": "Socket nel Modello OSI", "url": "modello-iso-osi.html" },
              { "text": "Socket, TCP e UDP", "url": "socket-tcp-udp.html" }
          ]
      },
      "masthead": {
          "heading": "Le Socket",
          "backgroundImage": "assets/img/Sfondo.jpg"
      },
      "features": [
          {
              "icon": "bi-lock",
              "title": "Connessione Sicura",
              "description": "Le socket offrono una connessione sicura tra dispositivi, garantendo la protezione dei dati grazie a protocolli come TLS/SSL."
          },
          {
              "icon": "bi-alarm",
              "title": "Comunicazione in Tempo Reale",
              "description": "Le socket permettono comunicazioni rapide e in tempo reale, fondamentali per app di messaggistica, giochi online e videoconferenze."
          },
          {
              "icon": "bi-arrow-repeat",
              "title": "Flessibilità dei Protocolli",
              "description": "Supportano vari protocolli come TCP e UDP, adattandosi così a diverse esigenze, da quelle di alta affidabilità a quelle di velocità."
          }
      ],
      "showcases": [
          {
              "image": "assets/img/Socker.png",
              "title": "Cosa Sono le Socket?",
              "description": "Una socket è un'interfaccia software che consente a due programmi, potenzialmente su computer diversi, di comunicare tra loro."
          },
          {
              "image": "assets/img/bg-showcase-2.jpg",
              "title": "Funzioni principali delle Socket",
              "description": "Le socket permettono di stabilire connessioni in rete per trasmettere dati in modo sicuro e rapido."
          },
          {
              "image": "assets/img/bg-showcase-3.jpg",
              "title": "Utilizzi delle Socket",
              "description": "Le socket sono fondamentali per molte applicazioni moderne."
          }
      ],
      "footer": {
          "text": "&copy; Santi Lorenzo 5E. All Rights Reserved."
      }
  };

  // Popola il titolo della pagina
  document.title = pageData.pageTitle;
  document.getElementById('mastheadTitle').innerText = pageData.masthead.heading;

  // Navbar
  const navbarLinks = document.getElementById('navbarLinks');
  pageData.navbar.menuItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.url;
      link.innerText = item.text;
      link.className = "navbar-link";
      navbarLinks.appendChild(link);
  });

  // Masthead immagine
  document.querySelector('.masthead').style.backgroundImage = `url(${pageData.masthead.backgroundImage})`;

  // Features
  const featuresSection = document.getElementById('featuresSection');
  pageData.features.forEach(feature => {
      const featureItem = document.createElement('div');
      featureItem.className = "col-lg-4";
      featureItem.innerHTML = `
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                  <i class="bi ${feature.icon} m-auto text-primary"></i>
              </div>
              <h3>${feature.title}</h3>
              <p class="lead mb-0">${feature.description}</p>
          </div>
      `;
      featuresSection.appendChild(featureItem);
  });

  // Showcases
  const showcaseSection = document.getElementById('showcaseSection');
  pageData.showcases.forEach(showcase => {
      const showcaseRow = document.createElement('div');
      showcaseRow.className = "row g-0";
      showcaseRow.innerHTML = `
          <div class="col-lg-6 text-white showcase-img" style="background-image: url(${showcase.image})"></div>
          <div class="col-lg-6 my-auto showcase-text">
              <h2>${showcase.title}</h2>
              <p class="lead mb-0">${showcase.description}</p>
          </div>
      `;
      showcaseSection.appendChild(showcaseRow);
  });

  // Footer
  document.getElementById('footerText').innerHTML = pageData.footer.text;
});
