(function() {
    var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
    for (var i = 0; i < names.length; i++) {
        var firstletter = names[i].charAt(0).toLowerCase();
        if (firstletter === "J") {
            byeSpeaker(names[i]);
            
        } 
        else {
            helloSpeaker(names[i]);
            
        }
        
    }
})();