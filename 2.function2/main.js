function isPalindrome(str){
    var len = parseInt((str.length+1)/2);
    for(var i=0; i<len; i++){
        if (str[i] !== str[str.length-i-1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('adddddda'));//true
console.log(isPalindrome('addddda'));//true
console.log(isPalindrome('adddasd'));//false