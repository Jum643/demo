var name2 = document.getElementById("APPLE")
var phone = document.getElementById("CAT")
var btn = document.getElementById("savebtn")
var popb = document.getElementById("popbtn")
var ul=document.getElementById("dt")
var data=[]

function render(){
    ul.innerHTML=""
    for( i in data){
        ul.innerHTML=ul.innerHTML+`<li>${data[i].Name}</li>`
    }}
function Save(){
    var NAME1 = name2.value
    var PHONE1 = parseInt(phone.value)
    if(NAME1 && PHONE1){
    data.push({Name:NAME1,Phone:PHONE1})
    }
    console.log(data)
    render()
}

btn.onclick = Save;
popb.onclick = function(){
    data.pop()
    render()
}