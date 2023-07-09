const textArea = document.getElementById('description');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
    console.log(textLn);
    document.getElementById('countText').innerHTML='Total words: '+getWordCount(textLn);
    document.getElementById('countCharacter').innerHTML='Total Character:' + textLn.length;
});

function getWordCount(str) {
     console.log(str.length);
     return str.trim().split(/\s+/).length;
}