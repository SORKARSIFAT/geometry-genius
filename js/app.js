// * file navigation
document.getElementById("blog-btn").addEventListener("click",function(){
    window.location.href = "blog.html"
   
})
// triangle 
document.getElementById("triangle-btn").addEventListener("click",function(){
   // get input value using function **
   const triangleField1 = getInputField("base");
   const  triangleField2 = getInputField("hight");

   const triangleText = setInnerText("triangle-text");
     if(isNaN(triangleField1) || isNaN(triangleField2)){
        alert("Please provide a number");
        return;
     }

  const triangleFormula = 0.5 * triangleField1 * triangleField2;

   setTheData(triangleText , triangleFormula );
})

// Rectangle 

document.getElementById("rectangle-btn").addEventListener("click", function(){
    // get input value using function **
   const rectangleField1 = getInputField("width");
   const rectangleField2 = getInputField("langth");

   const rectangleText = setInnerText("rectangle-text");
  if(isNaN(rectangleField1) || isNaN(rectangleField2)){
   alert("Please provide a number");
   return;
}
   const rectangleFormula = rectangleField1 * rectangleField2 ;
   setTheData(rectangleText , rectangleFormula);


    
   
})

// parallelogram
document.getElementById("parallelogram-btn").addEventListener("click" , function(){
   const parallelogramField1 = getInputField("pBase");
   const parallelogramField2 = getInputField("pHight");
  
   const parallelogramText = setInnerText("parallelogram-text");
   if(isNaN(parallelogramField1) || isNaN(parallelogramField2)){
      alert("please provide a number");
      return;
   }
   const parallelogramFormula = parallelogramField1 * parallelogramField2;
   setTheData(parallelogramText , parallelogramFormula);
})

// rhombus 
document.getElementById("rhombus-btn").addEventListener("click" , function(){
   const rhombusField1 = getInputField("d1");
   const rhombusField2 = getInputField("d2");
   
   const rhombusText = setInnerText("rhombus-text");
   if(isNaN(rhombusField1) || isNaN(rhombusField2)){
      alert("please provide a number");
      return;
   }
   const rhombusFormula = 0.5 * rhombusField1 * rhombusField2 ;
   setTheData(rhombusText , rhombusFormula);
})

// Pentagon 
document.getElementById("pentagon-btn").addEventListener("click" , function(){
   const pentagonFiled1 = getInputField("p1");
   const pentagonFiled2 = getInputField("b2");

   const PentagonText = setInnerText("pentagon-text");
   if(isNaN(pentagonFiled1) || isNaN(pentagonFiled2)){
      alert("please provide a number");
      return;
   }
   const PentagonFormula = 0.5 * pentagonFiled1 * pentagonFiled2;
   setTheData(PentagonText , PentagonFormula);
})

// Ellipse 
document.getElementById("ellipse-btn").addEventListener("click" , function(){
   const ellipseFiled1 = getInputField("a");
   const ellipseFiled2=  getInputField("b3");

   const ellipseText = setInnerText("ellipse-text");
   if(isNaN(ellipseFiled1) || isNaN(ellipseFiled2)){
      alert("please provide a number");
      return;
   }
   const ellipseFormula = (3.14 * ellipseFiled1 * ellipseFiled2).toFixed(1);
   setTheData(ellipseText , ellipseFormula);
})

