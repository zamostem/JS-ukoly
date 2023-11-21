const fillcut = (str, len) => {
    if (str.length > len) {
        document.body.innerHTML += `<p>${str.slice(0, len)}`
    } else if (str.length < len) {
        document.body.innerHTML += `<p>${str.padStart(len, ".")}`
    } else {
        document.body.innerHTML += str
    }
}

fillcut("Praha", 3)
fillcut("Praha", 10)
fillcut("Praha", 5)