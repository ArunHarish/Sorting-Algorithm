var x = [1, 3, 5, 7];
var y = [2, 4, 6, 8];


var x = [1, 3, 5, 7, 9];
var y = [2, 4, 6, 8, 10];

function check(x, y) {
    
    var result = [];

    while(x.length || y.length) {

        const bothExists = x.length && y.length;

        if( bothExists && x[0] < y[0] || x.length && !y.length) {
            result.push(x[0]);
            x.shift();
        }
        else 
        if(bothExists && y[0] <= x[0] || y.length && !x.length) {
            result.push(y[0]);
            y.shift();
        } 

    }

    return result;
}

console.log(check(x, y));