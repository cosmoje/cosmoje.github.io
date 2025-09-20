// Font Face Observer - minimal implementation
window.FontFaceObserver = function(fontFamily) {
    this.fontFamily = fontFamily;
};

window.FontFaceObserver.prototype.load = function() {
    return new Promise(function(resolve) {
        // Simple font loading - just resolve immediately for now
        setTimeout(resolve, 100);
    });
};