




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
    } else {
        input = document.getElementById("irregularDrop").value
        future = document.getElementById("resultFutureB")
        present = document.getElementById("resultPresentB")
        past = document.getElementById("resultPastB")
    }

    future.value = keyMain[input]['future']
    present.value = keyMain[input]['present']
    past.value = keyMain[input]['past']

}

let examplesDrop = document.getElementById("examplesDrop")


console.log(document.getElementById("resultA"))

// examplesDrop.onchange = function () {a.value = "dance"}
document.getElementById("examplesDrop").onChange = "valueUpdate();"