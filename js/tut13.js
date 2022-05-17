a = document.links
// console.log(a)
let links = [1]

Array.from(a).forEach(function(element){
    // console.log(typeof(element))
    str = String(element)
    // console.log(`${str} is ${typeof(str)}`)
    if(str.includes("sub")) {
        // console.log(str)
        links.push(str)
    }
})

links.shift()
console.table(links)