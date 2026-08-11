/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //xor연산

    while(b !== 0){
        let m = (a & b) << 1;

        a = a ^ b;

        b = m;
    }
    return a;
};