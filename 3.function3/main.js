function alphabetSort(message){
    // wirte your code here
    var key = [];
    for(var i=0;i<message.length;i++){
        key.push(message[i])
    }
    return key.sort().join("")
  }
  alphabetSort('hello'); // should return 'ehllo'