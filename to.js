var button = document.getElementById("btn");
var inp= document.getElementById("txt");
var list= document.querySelector("ul");

button.addEventListener("click",function(){
    if(inp.value.length > 0)
    {
    todo()
    }
});
inp.addEventListener("keypress",function(){
    if(inp.value.length > 0 && event.code === "Enter")
    {
        todo()
    }
    
});

function todo(){
    {
    var li =document.createElement("li");
    li.appendChild(document.createTextNode(inp.value));
    list.appendChild(li);
    inp.value= "";
    }
}

