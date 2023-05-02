



let keyMain = {
    play: {future: "play", present: "playing", past: "played"},
    dance: {future: "dance", present: "dancing", past: "danced"},
    jump: {future: "jump", present: "juping", past: "jumped"},
    push: {future: "push", present: "pushing", past: "pushed"},
    enjoy: {future: "enjoy", present: "enjoying", past: "enjoyed"},

    eat: {future: "eat", present: "eating", past: "ate"},
    go: {future: "go", present: "going", past: "went"},
    leave: {future: "leave", present: "leaving", past: "left"},
    fly: {future: "fly", present: "flying", past: "flew"},
    make: {future: "make", present: "making", past: "made"},
    take: {future: "take", present: "taking", past: "took"},
}









function checkAnswers() {
    let input = document.getElementById("testDrop").value
    let answerFuture = document.getElementById("resultFutureC").value.toLowerCase()
    let answerPresent = document.getElementById("resultPresentC").value.toLowerCase()
    let answerPast = document.getElementById("resultPastC").value.toLowerCase()
    
    let futureResult = document.getElementById("futureTick");
    let presentResult = document.getElementById("presentTick")
    let pastResult = document.getElementById("pastTick")

    futureResult.value = "New Value";
    if (keyMain[input]['future'] == answerFuture) {
        futureResult.value = "✔"
    } else {
        futureResult.value = "✘"
    }

    if (keyMain[input]['present'] == answerPresent) {
        presentResult.value = "✔"
    } else {
        presentResult.value = "✘"
    }

    if (keyMain[input]['past'] == answerPast) {
        pastResult.value = "✔"
    } else {
        pastResult.value = "✘"
    }

    document.getElementById("futureTick").hidden = false
    document.getElementById("presentTick").hidden = false
    document.getElementById("pastTick").hidden = false
}










function valueUpdate(form) {

    let input = ""
    let future = null
    let present = null
    let past = null

    if (form == "A") {
        input = document.getElementById("examplesDrop").value
        future = document.getElementById("resultFutureA")
        present = document.getElementById("resultPresentA")
        past = document.getElementById("resultPastA")
    } else if (form == "B") {
        input = document.getElementById("irregularDrop").value
        future = document.getElementById("resultFutureB")
        present = document.getElementById("resultPresentB")
        past = document.getElementById("resultPastB")
    } else {
        document.getElementById("resultFutureC").value = ""
        document.getElementById("resultPresentC").value = ""
        document.getElementById("resultPastC").value = ""
        document.getElementById("futureTick").hidden = true
        document.getElementById("presentTick").hidden = true
        document.getElementById("pastTick").hidden = true
        return
    }
    future.value = keyMain[input]['future']
    present.value = keyMain[input]['present']
    past.value = keyMain[input]['past']
}

let examplesDrop = document.getElementById("examplesDrop")


console.log(document.getElementById("resultA"))

// examplesDrop.onchange = function () {a.value = "dance"}
document.getElementById("examplesDrop").onChange = "valueUpdate();"