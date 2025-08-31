function cntVowels(str) {
    vowels = "aeiouAEIOU";

    for(const char of str) {
        if(vowels.includes(char)) {
            console.log(char);
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const input = document.getElementById("textInput").value;
    cntVowels(input);
}
