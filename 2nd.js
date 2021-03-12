var a = document.getElementById("apple")
var c = document.getElementById("mark")
var btn = document.getElementById("click")
var arr=[]
function sum(){
    var ab= a.value
    var ac= parseInt(c.value)

    for(i of arr){
        console.log(i)
    }
    arr.push({'name': ab,'score': ac})

} 
btn.onclick = sum