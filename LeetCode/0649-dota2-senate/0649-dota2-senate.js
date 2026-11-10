/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let dqueue = []
    let rqueue = []
    let n = senate.length;

    for(let i=0; i<n; i++){
        if(senate[i] === 'R'){
            rqueue.push(i)
        }else{
            dqueue.push(i)
        }
    }

    while(rqueue.length > 0 && dqueue.length > 0){
        let rindex = rqueue.shift()
        let dindex = dqueue.shift()

        if(rindex <  dindex){
            rqueue.push(rindex + n)
        }else{
            dqueue.push(dindex + n)
        }
    }

    return rqueue.length > 0 ? "Radiant" : "Dire"

    
};