const next = document.querySelector('a.coreSpriteRightPaginationArrow');
function doSomething(random) {
    const like = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
    if(like){
        console.log('click\n');
        like.click();
    }
    next.click();
    console.log('Esperando '+random+' miliseconds\n');
}

(function loop() {
    var min = 15000; // mínimo de 15 segundos
    var max = 25000; // máximo de 25 segundos
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setTimeout(function() {
            doSomething(random);
            loop();  
    }, random);
}());

var firstLike = document.querySelector('button > svg[aria-label="Like"]');
var closestElement = firstLike.closest('button');
closestElement.click();