document.addEventListener("DOMContentLoaded", function() {
    let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null); // geht durch alle Textknoten (kein HTML!) 
    let node;
    
    while ((node = iterator.nextNode())) {
        if (node.parentNode.tagName !== "A") { // Zahlen in <a>-Tags werden ignoriert
            node.nodeValue = node.nodeValue.replace(/\b\d+\b/g, match => 
                `\u200B<span style="color:#ffdd56;">${match}</span>\u200B` // Fügt unsichtbare Zeichen hinzu, um Zeilenumbrüche sauber zu halten.
            );
        }
    }
});
