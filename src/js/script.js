document.addEventListener("DOMContentLoaded", function() {
    let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null); // geht durch alle Textknoten (kein HTML!) 
    let node;
    
    while ((node = iterator.nextNode())) {
        if (node.parentNode.tagName !== "A") { // Zahlen in <a>-Tags werden ignoriert
                node.nodeValue = node.nodeValue.replace(/\b\d+\b/g, match => `<code>${match}</code>`);
            );
        }
    }
});
