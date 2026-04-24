
// Furthest Point From Origin

var furthestDistanceFromOrigin = function(moves) {
    let countL = 0;
    let countR = 0;
    let count_ = 0;

    for(let ch of moves) {
        if(ch === 'L') {
            countL++
        }
        else if(ch === 'R') {
            countR++
        }
        else{
            count_++
        }
    }
    return Math.abs(countL - countR) + count_
}

console.log(furthestDistanceFromOrigin("L_RL_R"))