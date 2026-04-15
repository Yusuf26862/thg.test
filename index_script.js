/**
 * Global function to handle successful scans
 */
function onScanSuccess(decodedText, decodedResult) {
    const resultElement = document.getElementById('result');
    
    // Add a little 'success' flash effect
    resultElement.style.background = "#d4edda";
    resultElement.innerText = `Scanned: ${decodedText}`;
    
    // Reset background after 1 second
    setTimeout(() => {
        resultElement.style.background = "#e8f0fe";
    }, 1000);

    console.log(`Scan Result: ${decodedText}`, decodedResult);
}

/**
 * Global function to handle scan failures
 */
function onScanFailure(error) {
    // We leave this empty to avoid filling the console with "No code found" errors
}

/**
 * Scanner Configuration
 * This version forces HD resolution and the rear camera
 */
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", 
    { 
        fps: 20, 
        qrbox: { width: 280, height: 180 }, // Slightly larger for barcodes
        aspectRatio: 1.0,
        videoConstraints: {
            // "environment" tells the phone to use the rear-facing camera
            facingMode: "environment",
            // Requesting HD resolution for better focus on small barcodes
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 }
        }
    }, 
    false
);

// Render the scanner
html5QrcodeScanner.render(onScanSuccess, onScanFailure);