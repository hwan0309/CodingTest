/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false

    const sorts = s.split('').sort().join('')
    const sortt = t.split('').sort().join('')

    return sorts === sortt
    
};