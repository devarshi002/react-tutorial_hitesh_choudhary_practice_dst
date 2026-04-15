// * * * *
// * * *
// * *
// *

function invertedTriangle(n) {
    for (let i=n; i>=1; i--) {
        let row = " "

        for(let j = 1; j<=i; j++) {
            row += j +" "
        }

        console.log(row);
        
    }
}

invertedTriangle(4)