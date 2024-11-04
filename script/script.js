let i = 1

function add(){
    let input = document.getElementById("input")
    let output = document.getElementById("pole")
    output.innerHTML += "<br>" + i + ". " + input.value
    i += 1
}