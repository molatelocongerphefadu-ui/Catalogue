// QR Code Generator
document.addEventListener("DOMContentLoaded", function() {
    const qrCodeContainer = document.getElementById("qrcode");
    
    if (qrCodeContainer) {
        new QRCode(qrCodeContainer, {
            text: window.location.href,
            width: 220,
            height: 220,
            colorDark: "#1e3a8a",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});