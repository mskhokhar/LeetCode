/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let sCounter = {};
    let tCounter = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!sCounter[char]) sCounter[char] = 0;
        sCounter[char] += 1
    }
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!tCounter[char]) tCounter[char] = 0;
        tCounter[char] += 1
    }
    let keys = Object.keys(sCounter);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (sCounter[key] !== tCounter[key]) return false;
    }
    return true;
};