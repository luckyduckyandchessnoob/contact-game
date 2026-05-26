let secretWord = document.getElementById("secret-word");

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
    document.getElementById("submit-btn-1").style.display = "block";
    submitBtn.addEventListener("click", () => {
        const guessInput1 = document.getElementById("guess-input-1").value.trim().toUpperCase();
        
        document.getElementById("guess-text-1").style.display = "none";
        document.getElementById("guess-input-1").style.display = "none";
        document.getElementById("submit-btn-1").style.display = "none";

        document.getElementById("guess-text-2").style.display = "block";
        document.getElementById("guess-input-2").style.display = "block";
        document.getElementById("submit-btn-2").style.display = "block";

        const guessInput2 = document.getElementById("guess-input-2").value.trim().toUpperCase();
    });

    input1.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.querySelector(".submit-btn-1").click();
        }
    });
}