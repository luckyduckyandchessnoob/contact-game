let secretWord = document.getElementById("secret-word");
let guess1 = "";
let guess2 = "";
let results = "";
let wordIndex = 1;
let word = "";

function getWord() {
    return fetch("words.json")
        .then(response => {
            return response.json();
        })
        .then(words => {
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            word = words[today].toUpperCase();
            return word;
        });
}

getWord().then(word => {
    secretWord.innerText = word[0] + "...";
});

document.getElementById("guess-input-1").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.getElementById("submit-btn-1").click();
        }
    });

    // show guess input for player 2
document.getElementById("submit-btn-2").addEventListener("click", () => {
    guess2 = document.getElementById("guess-input-2").value.trim().toUpperCase();
    document.getElementById("guess-2").style.display = "none";
    
    // win
     if (guess1 === word && guess2 === word) {
        results += "🎉";
        secretWord.innerText = "Results: " + results;
        document.getElementById("results-container").style.display = "block";
    }
    // match
    else if (guess1 === guess2) {
            results += "✅";
            wordIndex++;
            secretWord.innerText = word.slice(0, wordIndex) + "...";
    }
    // not a match
    else {
        results += "❌";
    }
    // another round
    if (results[results.length - 1] !== "🎉") {
        document.getElementById("contact-btn").style.display = "block";
    }
    document.getElementById("guess-input-1").value = "";
    document.getElementById("guess-input-2").value = "";
});

document.getElementById("guess-input-2").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.getElementById("submit-btn-2").click();
    }
});

function activateContact() {
    // show guess input for player 1
    document.getElementById("contact-btn").style.display = "none";
    document.getElementById("guess-1").style.display = "flex";
    document.getElementById("submit-btn-1").onclick = () => {
        guess1 = document.getElementById("guess-input-1").value.trim().toUpperCase();
        document.getElementById("guess-1").style.display = "none";
        document.getElementById("guess-2").style.display = "flex";
    };
}

function copyResults() {
    navigator.clipboard.writeText(results).then(() => {
        document.getElementById("copy-btn").innerText = "Copied!";
    }).catch(err => {
        document.getElementById("copy-btn").innerText = "Try again";
    });
}