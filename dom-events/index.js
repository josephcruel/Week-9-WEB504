//NOTE

// const p = document.getElementById('message'); // This would return the value "null"
// console.log(p);

let btn = document.getElementById('btnRadio')
let output = document.getElementById('output')

btn.addEventListener('click', () => {
    let languages = document.getElementsByName('language')
    languages.forEach((language) => {
        if (language.checked) {
            output.innerText = `You code with : ${language.value}`
        }
    })
})