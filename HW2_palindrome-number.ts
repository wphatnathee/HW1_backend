function isPalindrome(x: number): boolean {
    const char = x.toString();
    let start = 0;
    let end = char.length-1 ;

    while (start < end ) {
        if (char[start] !== char[end]) return false

        start++ ;
        end-- ;
    }
    return true
};

function isPalindrome2(x: number): boolean {
    const reversed = `${x}`.split('').reverse().join('')

    return `${x}` === reversed
};


