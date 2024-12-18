document.addEventListener("DOMContentLoaded", function () {
  const pageData = {
      "navbar": {
          "homeLink": {
              "text": "Socket nel Modello OSI",
              "url": "modello-iso-osi.html"
          },
          "links": [
              { "text": "Home Page", "url": "index.html" },
              { "text": "Socket, TCP e UDP", "url": "socket-tcp-udp.html" }
          ]
      },
      "header": {
          "title": "Socket nel Modello OSI",
          "backgroundImage": "assets/img/Sfondo.jpg" // Percorso immagine
      },
      "content": [
          {
              "sectionTitle": "Il Modello OSI: Introduzione",
              "paragraphs": [
                  "Il modello OSI (Open Systems Interconnection) è un framework teorico che descrive come i dati vengono trasmessi da un dispositivo a un altro attraverso una rete, suddividendo il processo in 7 livelli. Ogni livello ha una funzione specifica e interagisce con il livello superiore e inferiore, facilitando la progettazione e la comprensione delle reti."
              ],
              "listItems": [
                  { "title": "Fisico", "description": "Trasmissione di segnali elettrici, ottici o radio." },
                  { "title": "Data Link", "description": "Controllo dell'accesso al mezzo trasmissivo e rilevamento degli errori." },
                  { "title": "Rete", "description": "Instradamento dei pacchetti (ad esempio, tramite IP)." },
                  { "title": "Trasporto", "description": "Garantisce la consegna affidabile e l'ordinamento dei dati." },
                  { "title": "Sessione", "description": "Gestione delle sessioni tra le applicazioni." },
                  { "title": "Presentazione", "description": "Traduzione dei dati in un formato comprensibile." },
                  { "title": "Applicazione", "description": "Interfaccia con l'utente e le applicazioni (es. HTTP, FTP)." }
              ],
              "image": {
                  "src": "assets/img/osi.png",
                  "alt": "Modello OSI",
                  "modalTarget": "#osiModal"
              }
          },
          {
              "sectionTitle": "Il Livello di Trasporto e il Ruolo delle Socket",
              "paragraphs": [
                  "Il livello di trasporto (Layer 4) è cruciale perché si occupa di garantire che i dati vengano trasferiti correttamente tra due dispositivi, indipendentemente dal tipo di rete sottostante. Le socket operano principalmente a questo livello e si appoggiano a due protocolli principali:"
              ],
              "listItems": [
                  { "title": "TCP (Transmission Control Protocol)", "description": "Garantisce una comunicazione affidabile e ordinata. Utilizza meccanismi di controllo del flusso e di ritrasmissione in caso di pacchetti persi." },
                  { "title": "UDP (User Datagram Protocol)", "description": "È un protocollo non affidabile e senza connessione. Non garantisce l'ordine dei pacchetti né la ritrasmissione, ma è più veloce." }
              ]
          },
          {
              "sectionTitle": "Socket e il Modello OSI",
              "paragraphs": [
                  "Le socket forniscono un'interfaccia che permette alle applicazioni (livello 7) di comunicare attraverso la rete, utilizzando i servizi offerti dal livello di trasporto (TCP o UDP). Il loro funzionamento può essere descritto come segue:"
              ],
              "listItems": [
                  { "title": "Creazione della Socket", "description": "L'applicazione crea una socket specificando il protocollo (TCP o UDP) e l'indirizzo di destinazione." },
                  { "title": "Trasferimento dei Dati", "description": "I dati vengono suddivisi in segmenti (TCP) o datagrammi (UDP) e passano attraverso i livelli inferiori del modello OSI." },
                  { "title": "Consegna dei Dati", "description": "I segmenti raggiungono la destinazione, dove vengono riassemblati e consegnati all'applicazione ricevente." }
              ],
              "paragraphs2": [
                  "In sintesi, le socket sono fondamentali per mettere in comunicazione il livello applicativo con quello di trasporto, permettendo la creazione di applicazioni di rete come browser, server web e sistemi di messaggistica."
              ]
          }
      ],
      "footer": {
          "text": "&copy; Santi Lorenzo 5E. All Rights Reserved."
      }
  };

  // Popola il titolo della pagina
  document.title = pageData.header.title;
  document.getElementById('headerTitle').innerText = pageData.header.title;

  // Imposta lo sfondo all'header
  const headerElement = document.querySelector('header');
  if (headerElement) {
      headerElement.style.backgroundImage = `url(${pageData.header.backgroundImage})`;
      headerElement.style.backgroundSize = 'cover';
      headerElement.style.backgroundPosition = 'center';
  }

  // Navbar
  const isoOsiLink = document.getElementById('isoOsiLink');
  isoOsiLink.href = pageData.navbar.homeLink.url;
  isoOsiLink.innerText = pageData.navbar.homeLink.text;

  const navbarLinks = document.querySelector('.navbar-custom .container div');
  pageData.navbar.links.forEach(item => {
      const link = document.createElement('a');
      link.href = item.url;
      link.innerText = item.text;
      navbarLinks.appendChild(link);
  });

  // Content
  const contentContainer = document.getElementById('contentContainer');
  pageData.content.forEach(section => {
      const sectionDiv = document.createElement('div');
      sectionDiv.className = 'content-section';
      sectionDiv.innerHTML = `
          <div class="content-text">
              <h2>${section.sectionTitle}</h2>
              ${section.paragraphs.map(p => `<p>${p}</p>`).join('')}
              ${section.listItems ? `<ul>
                  ${section.listItems.map(item => `<li><strong>${item.title}:</strong> ${item.description}</li>`).join('')}
              </ul>` : ''}
              ${section.paragraphs2 ? section.paragraphs2.map(p => `<p>${p}</p>`).join('') : ''}
          </div>
          ${section.image ? `
              <div class="content-image">
                  <img src="${section.image.src}" alt="${section.image.alt}" data-bs-toggle="modal" data-bs-target="${section.image.modalTarget}">
              </div>` : ''}
      `;
      contentContainer.appendChild(sectionDiv);
  });

  // Footer
  document.getElementById('footerText').innerHTML = pageData.footer.text;
});
