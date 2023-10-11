// * file navigation
document.getElementById("blog-btn").addEventListener("click",function(){
    window.location.href = "blog.html"
   
})
// triangle 
document.getElementById("triangle-btn").addEventListener("click",function(){
   const triangleField1 = getInputField("base");
   const  triangleField2 = getInputField("hight");


    // get triangle text

     
     const triangleText = setInnerText("triangle-text");

     if(isNaN(triangleField1) || isNaN(triangleField2)){
        alert("Please provide a number");
        return;

     }


const triangleFormula = 0.5 * triangleField1 * triangleField2;
//    set the calculation
setTheData(triangleText , triangleFormula );
    
})

// Rectangle 

document.getElementById("rectangle-btn").addEventListener("click", function(){
    
   
})
