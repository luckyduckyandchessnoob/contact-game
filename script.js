let secretWord = document.getElementById("secret-word");
let results = "";
let givenIndex = 0;
console.log(".");

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
    secretWord.innerText = word[givenIndex] + "...";
});

function activateContact() {
    // show guess input for player 1
    document.getElementById("contact-btn").style.display = "none";
    document.getElementById("guess-1").style.display = "flex";
    document.getElementById("submit-btn-1").addEventListener("click", () => {
        const guess1 = document.getElementById("guess-input-1").value.trim().toUpperCase();
        document.getElementById("guess-1").style.display = "none";
        document.getElementById("guess-2").style.display = "flex";
    });

    document.getElementById("guess-input-1").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.getElementById("submit-btn-1").click();
        }
    });

    // show guess input for player 2
    document.getElementById("submit-btn-2").addEventListener("click", () => {
        const guess2 = document.getElementById("guess-input-2").value.trim().toUpperCase();
        document.getElementById("guess-2").style.display = "none";
    });
    document.getElementById("guess-input-2").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.getElementById("submit-btn-2").click();
        }
    });

    // compare guesses
    if (guess1 === guess2) {
        if (guess1 === secretWord.innerText) {
            results += "🎉}";
            console.log(results);
        }
        else {
            results += "✅";
            secretWord.innerText = word[givenIndex] + "...";
        }
    }
    else {
        results += "❌";
    }

    document.getElementById("guess-2").style.display = "none";
    if (guess1 != secretWord.innerText) {
        document.getElementById("contact-btn").style.display = "block";
    }
}