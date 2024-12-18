document.addEventListener("DOMContentLoaded", function () {
    const pageData = {
        "navbar": {
            "homeLink": {
                "text": "Socket, TCP e UDP",
                "url": "socket-tcp-udp.html"
            },
            "links": [
                { "text": "Home Page", "url": "index.html" },
                { "text": "Socket nel Modello OSI", "url": "modello-iso-osi.html" }
            ]
        },
        "header": {
            "title": "Socket, TCP e UDP",
            "backgroundImage": "assets/img/Sfondo.jpg"
        },
        "content": [
            {
                "sectionTitle": "Protocolli TCP e UDP",
                "paragraphs": [
                    "I protocolli TCP e UDP operano al livello di trasporto del modello OSI e svolgono un ruolo fondamentale nella gestione delle comunicazioni tra dispositivi in rete. Entrambi utilizzano socket come punto di accesso per l'invio e la ricezione di dati attraverso la rete."
                ],
                "subsections": [
                    {
                        "title": "Socket e Protocolli di Trasporto",
                        "paragraphs": [
                            "Le socket sono l'interfaccia che le applicazioni utilizzano per comunicare con la rete. Quando un'applicazione deve inviare o ricevere dati, apre una socket e specifica quale protocollo di trasporto utilizzare: TCP o UDP. Il protocollo scelto determina il comportamento della comunicazione."
                        ],
                        "listItems": [
                            { "title": "Socket TCP", "description": "Creano una connessione stabile tra client e server, garantendo che i dati siano consegnati in modo affidabile e ordinato." },
                            { "title": "Socket UDP", "description": "Permettono la trasmissione di pacchetti senza stabilire una connessione formale, rendendole ideali per applicazioni in tempo reale." }
                        ]
                    }
                ]
            },
            {
                "sectionTitle": "Confronto Diretto TCP vs UDP",
                "table": {
                    "headers": ["Caratteristica", "TCP", "UDP"],
                    "rows": [
                        ["Connessione", "Orientato alla connessione", "Senza connessione"],
                        ["Affidabilità", "Garantita", "Non garantita"],
                        ["Ritrasmissione", "Sì", "No"],
                        ["Velocità", "Più lento", "Più veloce"],
                        ["Ordinamento", "Ordinato", "Non ordinato"]
                    ]
                }
            }
        ],
        "footer": {
            "text": "&copy; Santi Lorenzo 5E. All Rights Reserved."
        }
    };

    // Navbar
    const navbarLinks = document.getElementById('navbarLinks');
    if (navbarLinks && pageData.navbar && pageData.navbar.links) {
        pageData.navbar.links.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.innerText = item.text;
            navbarLinks.appendChild(link);
        });
    }

    // Masthead
    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle && pageData.header) {
        headerTitle.innerText = pageData.header.title;
        document.querySelector('.masthead').style.backgroundImage = `url(${pageData.header.backgroundImage})`;
    }

    // Content
    const contentSection = document.getElementById('contentSection');
    if (contentSection && pageData.content && Array.isArray(pageData.content) && pageData.content.length > 0) {
        pageData.content.forEach(section => {
            const sectionTitle = document.createElement('h2');
            sectionTitle.innerText = section.sectionTitle;
            contentSection.appendChild(sectionTitle);

            if (section.paragraphs) {
                section.paragraphs.forEach(paragraph => {
                    const p = document.createElement('p');
                    p.innerText = paragraph;
                    contentSection.appendChild(p);
                });
            }

            if (section.subsections) {
                section.subsections.forEach(subsection => {
                    const subsectionTitle = document.createElement('h3');
                    subsectionTitle.innerText = subsection.title;
                    contentSection.appendChild(subsectionTitle);

                    if (subsection.paragraphs) {
                        subsection.paragraphs.forEach(paragraph => {
                            const p = document.createElement('p');
                            p.innerText = paragraph;
                            contentSection.appendChild(p);
                        });
                    }

                    if (subsection.listItems) {
                        const list = document.createElement('ul');
                        subsection.listItems.forEach(item => {
                            const li = document.createElement('li');
                            li.innerHTML = `<strong>${item.title}:</strong> ${item.description}`;
                            list.appendChild(li);
                        });
                        contentSection.appendChild(list);
                    }
                });
            }

            if (section.table) {
                const table = document.createElement('table');
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                section.table.headers.forEach(header => {
                    const th = document.createElement('th');
                    th.innerText = header;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);

                const tbody = document.createElement('tbody');
                section.table.rows.forEach(row => {
                    const tr = document.createElement('tr');
                    row.forEach(cell => {
                        const td = document.createElement('td');
                        td.innerText = cell;
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);
                contentSection.appendChild(table);
            }
        });
    }

    // Footer
    const footerText = document.getElementById('footerText');
    if (footerText && pageData.footer) {
        footerText.innerHTML = pageData.footer.text;
    }
});
