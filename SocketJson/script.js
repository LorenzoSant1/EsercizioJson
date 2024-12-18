function handleCurrentPageLink(linkId, message) {
    const link = document.getElementById(linkId);
    if (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            alert(message);
        });
    }
}

handleCurrentPageLink('homePageLink', 'Sei già sulla Home Page!');
handleCurrentPageLink('isoOsiLink', 'Sei già sulla pagina del Modello ISO OSI!');
handleCurrentPageLink('tcpUdpLink', 'Sei già sulla pagina di Socket, TCP e UDP!');
