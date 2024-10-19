function romanToInt(s: string): number {
    const romanIntegerMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const splittedS  = s.split('')
const romanIntegerKeys = Object.keys(romanIntegerMap)
let result = 0;

for (let i = 0 ; i  < splittedS.length; i++) {
    const cur = splittedS[i] 
    const indexCur = romanIntegerKeys.indexOf(cur)
    const indexCurPlusOne = romanIntegerKeys.indexOf(splittedS[i+1])

    const testCheck = (indexCurPlusOne - indexCur === 1 || indexCurPlusOne - indexCur === 2)

    if (testCheck) {
        console.log(indexCurPlusOne - indexCur)
        result += (romanIntegerMap[romanIntegerKeys[indexCur + (indexCurPlusOne - indexCur)]] - romanIntegerMap[romanIntegerKeys[indexCur]])
        i++
        continue
    }

    result += romanIntegerMap[cur]
}

return result
};


function romanToInt1(s: string): number {
    const romanIntegerMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let sum = 0
for (let i = 0 ; i < s.length; i++) {
    if (i + 1 < s.length && romanIntegerMap[s[i]] < romanIntegerMap[s[i+1]]){
        sum += romanIntegerMap[s[i+1]] - romanIntegerMap[s[i]];
        i++
    }
    else {
        sum += romanIntegerMap[s[i]]
    }
}
return sum;
}