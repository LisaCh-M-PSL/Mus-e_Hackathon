let urlScannee = null;

function onScanSuccess(decodedText, decodedResult) {
  html5QrcodeScanner.clear();

  try {
    const url = new URL(decodedText);
    if (url.protocol === "http:" || url.protocol === "https:") {
      urlScannee = url.href;
      document.getElementById("resultat").innerText = "QR code détecté : " + urlScannee;
      document.getElementById("ouvrirLien").style.display = "inline-block";
    } else {
      document.getElementById("resultat").innerText = "QR code non valide (protocole non autorisé)";
    }
  } catch (e) {
    document.getElementById("resultat").innerText = "Le QR code ne contient pas une URL valide : " + decodedText;
  }
}

function onScanFailure(error) {
  // ignorable
}

document.getElementById("ouvrirLien").addEventListener("click", () => {
  window.open(urlScannee, "_blank");
});

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: { width: 250, height: 250 } },
  false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);