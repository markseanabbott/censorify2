var censorWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor (inStr){
    for (idx in censorWords){
        inStr = inStr.replace(censorWords[idx], "****");
    }
    for (idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr; 
}
function addCensoredWords(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censorWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;