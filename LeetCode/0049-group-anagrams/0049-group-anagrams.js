/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let str of strs){
        const sortedArr = str.split("").sort().join("");

        if(map.has(sortedArr)){
            map.get(sortedArr).push(str)
        }else{
            map.set(sortedArr, [str])
        }
    }
    return Array.from(map.values())
    
};