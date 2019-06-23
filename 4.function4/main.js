function countWords(message){
    // wirte your code here
    message = message.trim()
    var key=1;
    for(var i=0;i<message.length;i++){
        if(message[i-1] == ' ' && message[i] != ' '){
            key++;
        }
    }
    return key
  }
  countWords('Good morning, I love JavaScript.'); // should return 5