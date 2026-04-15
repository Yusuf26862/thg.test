/**
 * Configuration for the scanner
 */
const config = {
    fps: 20,
    qrbox: { width: 280, height: 180 },
    aspectRatio: 1.0,
    videoConstraints: {
        facingMode: "environment",
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
    }
};

/**
 * Handle successful scans
 */
function onScanSuccess(decodedText, decodedResult) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerText = decodedText;
    
    // Add a visual "pop" effect
    resultDisplay.style.color = "#28a745";
    setTimeout(() => {
        resultDisplay.style.color = "#007bff";
    }, 1500);

    console.log(`Scan success: ${decodedText}`);
}

/**
 * Handle scan failures
 */
function onScanFailure(error) {
    // Silently ignore to keep the console clean
}

// Start the scanner
const html5QrcodeScanner = new Html5QrcodeScanner("reader", config, false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);