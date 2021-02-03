(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var name of names) {
        if(name[0].toLowerCase() === 'j')byeSpeaker.speak(name);
        else helloSpeaker.speak(name);
    };
})();
