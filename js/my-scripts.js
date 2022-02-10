// ---=== Confetti Script ===---//
// https://codepen.io/kimdontdoit/pen/wvdKLJo
var colors = ["#cc253b", "#c79822"];

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < Date.now() + 15000) {
        requestAnimationFrame(frame);
    }
}

var confettiInterval = null;
$("body > canvas").hide();
setTimeout(function () {
    confettiInterval = setInterval(frame(), 1000);
    $("body > canvas").show();
}, 10000); //wait 10 seconds

setTimeout(function () {
    $(".text-1").slideDown("1000");
}, 5000); //wait 3 seconds

setTimeout(function () {
    $(".text-2").slideDown("1000");
}, 8000); //wait 3 seconds

setTimeout(function () {
    $("#main-content, footer").slideDown();
    $(".names-progress-wrapper").slideUp();
    $(".play-trigger-wrapper").show();
}, 13000); //wait 13 seconds

setTimeout(function () {
    clearInterval(confettiInterval);
    $("body > canvas").fadeOut();
}, 15000); //wait 15 seconds



// ---=== Progress Counter ===---//
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("progress-figure", 0, 100, 10000);
});

// Text Transition
var text = ["Honey.", "Baby.", "My love.", "Ekomuj."];
var counter = 0;
var elem = $("#name");
setInterval(change, 2500);
function change() {
    elem.slideUp(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.slideDown();
    });
}