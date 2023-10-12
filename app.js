function btn(e) {
    var input = document.getElementById("inp")
    input.value += e
}
function equal() {
    var input = document.getElementById("inp")
    // var result = input.value
    input.value = eval(input.value)
}
function clrAll(e) {
    var input = document.getElementById("inp")
    input.value = e
}
function clr() {
    var input = document.getElementById("inp")
    var display = input.value
    input.value = display.slice(0, -1)
}
function btnm(value) {
    var input = document.getElementById("inp")
    if (value === '+' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '+' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '+' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '-' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '*' && input.value.endsWith('/')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('+')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('*')) {
        input.value = input.value.slice(0, -1)
    }else if (value === '/' && input.value.endsWith('-')) {
        input.value = input.value.slice(0, -1)
    }
    input.value += value
    
}
function mdl() {
    var input = document.getElementById("inp")

    input.value += "%"
}
function dz() {
    var input = document.getElementById("inp")
    input.value += '00'
}