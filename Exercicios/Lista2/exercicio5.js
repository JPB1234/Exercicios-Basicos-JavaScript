//let apresenta erro pois seu escopo se limita ao bloco em que está, enquanto var por natureza possui escopo global.
var x = 5;

{
    var y = 7;
    console.log(x, y);
}

console.log(y, x);

/*let x = 5;

{
    let y = 7;
    console.log(x, y);
}

console.log(y, x);*/