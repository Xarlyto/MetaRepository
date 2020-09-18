const STATE_LOADING = "loading"
const STATE_INTERACTIVE = "interactive"
const STATE_COMPLETE = "complete"

if (document.readyState == STATE_LOADING) {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}

function start() {
    document.getElementById("intro").addEventListener("click", function(){load_page('01_Intro.html')});
    document.getElementById("concepts").addEventListener("click", function(){load_page('02_Concepts.html')});
    document.getElementById("hof").addEventListener("click", function(){load_page('03_HOF.html')});
    document.getElementById("recursion").addEventListener("click", function(){load_page('04_Recursion.html')});
    document.getElementById("lenses").addEventListener("click", function(){load_page('05_Lenses.html')});
    document.getElementById("bibliography").addEventListener("click", function(){load_page('06_Bibliography.html')});
 }

function load_page(page) {
    console.log("Loading page" + page);
    document.getElementById('iframe').src = page;
}
