//for button
document.querySelector("button").addEventListener("click", work );


function work()
{
    alert("SONIA");
    document.querySelector("button").style.width="100px";
    document.querySelector("button").style.backgroundColor="yellow";
}



//for h1

document.querySelector("h1").addEventListener("click", work1);  //property,function name
document.querySelector("h1").addEventListener("dblclick", work2);   //property,function name


function work1()
{
    document.querySelector("h1").classList.add("name");
}



function work2()
{
    document.querySelector("h1").classList.remove("name");
}
