let secretWord = document.getElementById("secret-word");
document.getElementById("contact-btn").addEventListener("click", activateContact);

function getWord() {
    return fetch("words.json")
        .then(response => {
            return response.json();
        })
        .then(words => {
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            let word = words[today].toUpperCase();
            return word;
        });
}

getWord().then(word => {
    secretWord.innerText = word[0] + "...";
});

function activateContact() {
    document.getElementById("contact-btn").style.display = "none";
    document.getElementById("guess-text-1").style.display = "block";
    document.getElementById("guess-input-1").style.display = "block";
    const submitBtn = document.querySelector(".submit-btn");
    if (submitBtn) {
        submitBtn.style.display = "block";
    }
}