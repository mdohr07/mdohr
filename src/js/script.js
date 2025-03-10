 document.addEventListener("DOMContentLoaded", function() {
    let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null); // geht durch alle Textknoten (kein HTML!) 
    let node;
    
    while ((node = iterator.nextNode())) {
        if (node.parentNode.tagName !== "A") { // Zahlen in <a>-Tags werden ignoriert
            node.nodeValue = node.nodeValue.replace(/\b\d+\b/g, match => `<span class="highlight">${match}</span>`);
        }
    }
}); 

/*
document.addEventListener("DOMContentLoaded", function() {
    let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT, null);
    let node;
    
    while ((node = iterator.nextNode())) {
        if (node.parentNode.tagName !== "A") { // Links auslassen
            let parent = node.parentNode;
            let replacedHTML = node.nodeValue.replace(/\b\d+\b/g, match => `<span class="highlight">${match}</span>`);
            
            // Neuen HTML-Inhalt setzen
            let tempElement = document.createElement("span");
            tempElement.innerHTML = replacedHTML;
            parent.replaceChild(tempElement, node);
        }
    }
}); */


