let results =document.getElementById("inputext");

let calculate=(number)=>{
    results.value+=number;
}

let Result=()=>{
    try {
        results.value=eval(results.value);
        
    } catch (err) {
        alert("Enter a valid Operation");
        results.value="";
        
    }
}
function clr(){
    results.value="";
}

function del(){
    results.value=results.value.slice(0,-1);
}