function greet(name, str = "Thanks a lot") {
    let msg = (`Lorem, ipsum dolor ${name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui ${str} exercitationem veniam?`)

    return msg
}

let name1 = "Rv"
let name2 = "Anshuman"

let str = "str given value"

greet(name1, str)
val = greet(name2, str)

console.log(`val being printed ${val}`)

const obj = {
    naam : "rv",
    game : function(){
        return "game being returned"
    }
}

console.log(obj.game())

arr = ["santra", "seb", "kela"]

arr.forEach(function(element, index, array){
    console.log(`element : ${element}, index : ${index}, element : ${element}`)
})