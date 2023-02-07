/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let map = s.split('').reduce((obj, letter) => {
        if (!obj[letter]) {obj[letter] = 1} 
        else obj[letter]++
        return obj
    },{})
    
    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] === 1) {return i}
    }
    return -1
}


