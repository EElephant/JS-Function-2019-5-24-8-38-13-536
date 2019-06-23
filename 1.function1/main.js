function reverseString(message){
    // wirte your code here
    
    var str=[];
    for(var i=message.length-1;i>=0;i--){
        str.push(message[i])
    }
    return str.join('')
  }
reverseString('hello'); // should return 'olleh'