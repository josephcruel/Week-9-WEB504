//NOTE

//all declarations by using 'let'
//targeting the ul class tag 'menu' by getElementByClassId
let menu = document.getElementByClassId('menu')
//selecting the list class tag 'item' by using getElementByClassName
let items = menu.getElementByClassName('item')


let data = [].map.call(items, item => item.textContent) // ['JavaScript', 'CSS', 'HTML' , 'TypeScript']



//NOTE - getElementsByTagName

// let btn = document.getElementById('btnCount')
// btn.addEventListener('click',() => {
//     let hTwoHeader = document.getElementsByTagName('h2')
//     alert(`The number of H2 tags are: ${hTwoHeader.length}`)
// })


// const p = document.getElementById('message'); // This would return the value "null"
// console.log(p);

//NOTE - document.getElementsByName

// let btn = document.getElementById('btnRadio')
// let output = document.getElementById('output')

// btn.addEventListener('click', () => {
//     let languages = document.getElementsByName('language')
//     languages.forEach((language) => {
//         if (language.checked) {
//             output.innerText = `You code with : ${language.value}`
//         }
//     })
// })