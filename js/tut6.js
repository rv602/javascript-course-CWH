console.log("this is tut6")

const naam = "rv"
const greet = "good evening"

console.log(greet + ' ' + naam)

let html;
html = "<h1>this is my heading</h1>" + 
        "<p>this is a para</p>"

html = html.concat('this', ' str2')
// console.log(html)
// console.log(html.length)
// console.log(html.toUpperCase())

// console.log(html[1])
// console.log(html.indexOf('this'))
// console.log(html.lastIndexOf('<'))
// console.log(html.charAt(4))
// console.log(html.endsWith('str2'))
// console.log(html.includes('thiss'))
// console.log(html.substring(0,3))
// console.log(html.substring(1,3))
// console.log(html.slice(-4))
// console.log(html.slice(0,4))
// console.log(html.split('>'))
console.log(html.replace('this', 'that'))

let fruit1 = 'santra'
let fruit2 = 'seb'
let myHtml = `hello ${naam}
            <h1>this is heading</h1>
            <p>u like ${fruit1} and ${fruit2}`