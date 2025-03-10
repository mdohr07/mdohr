document.body.innerHTML = document.body.innerHTML.replace(
    /\b\d+\b/g, 
    '<span style="color:#ffdd56; font-weight:bold;">$&</span>'
);

/*
document.addEventListener("DOMContentLoaded", function() {
            let target = document.getElementById("content");
            let wordsToHighlight = ["Elite Dangerous", "Mass Effect", "Turianer"];
            
            wordsToHighlight.forEach(word => {
                let regex = new RegExp(`\\b${word}\\b`, "gi");
                target.innerHTML = target.innerHTML.replace(regex, `<span class="highlight">${word}</span>`);
            });
        });
*/