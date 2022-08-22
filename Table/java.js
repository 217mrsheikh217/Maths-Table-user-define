function getInfo(){
    var input= document.getElementById('input').value;
    var output= document.getElementById("output");
    var textarea= document.getElementById("input");
    var limit= document.getElementById("limit").value; 
    if(input<=0 || input>1000){
        alert("Enter A Valid Number");
    }
    else{
        output.innerHTML= " ";
        output.style.display="block";
        for(var i=1 ; i<=limit ; i++)
        {
            var result=  input + " x " + i +  "= " + input*i + "<br>" ; 
            output.innerHTML+=result;
        }
    }

}