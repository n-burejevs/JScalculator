/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var result = "";
var number = "";
var operator = "";

//alert(document.getElementsByClassName("calc-screen").innerHTML);
//input is used!
function button_press(input)
{
    switch(input) {
        case 'C':
           result = "";
           number = "";
           operator = "";
           document.getElementById("screen-top").innerHTML = "";
           document.getElementById("screen-bottom").innerHTML = "";
        break;
        
        
        
  case '+':
    //move entered number to top
/*  result = document.getElementById("screen-bottom").innerHTML;
  document.getElementById("screen-top").innerHTML = result; 
    number = "";
    document.getElementById("screen-bottom").innerHTML = "";*/
                //udated vesion, the result wont dissappear whne adding more
     calcScreenNumberSwitching();
    operator ='+';
    break;
  case '-':
    //
    
    operator = '-';
    calcScreenNumberSwitching();
   // calcScreenNumberSwitching2();
    break;
     case '*':
         
         operator = '*';
         calcScreenNumberSwitching2();
    // code block
    break;
     case '/':
         operator = '/';
         calcScreenNumberSwitching2();
    // code block
    break;
     case 0:
     {
         if(number==="")
          {
              number = "0.";
          }
          else if (number==="0")  break;
          
            document.getElementById("screen-bottom").innerHTML = number;
     }
    // code block
    break;
     case '=':
     {// 
    number = document.getElementById("screen-bottom").innerHTML;
  
    if (operator === '+')
    {
        result = Number(result) + Number(number);
            document.getElementById("screen-top").innerHTML = result; 
            //test!!!!!!!!!!
           number = "";
          
                document.getElementById("screen-bottom").innerHTML = "";
                /*console.log(result);*/
        
    } 
    if (operator === '-')
    {
        result = Number(result) - Number(number);
             document.getElementById("screen-top").innerHTML = result; 
               document.getElementById("screen-bottom").innerHTML = "";
                 //test!!!!!!!!!!!
           number = "";
               console.log(result);
    }
    
      if (operator === '*')
    {
        result = Number(result) * Number(number);
             document.getElementById("screen-top").innerHTML = result; 
               document.getElementById("screen-bottom").innerHTML = "";
                 //test!!!!
           number = "";
               console.log(result);
    }
    
       if (operator === '/')
    {
        result = Number(result) / Number(number);
             document.getElementById("screen-top").innerHTML = result; 
               document.getElementById("screen-bottom").innerHTML = "";
                 //test!!!!!!!!!
           number = "";
               console.log(result);
    }
    
    break;
     }
    case '<-':
        //remove a char from the back;
     var input = document.getElementById("screen-bottom").innerHTML;
     //take -1 of "input" string
        let length = Number(input.length)-1;
        if (length+1 > 0 )
        {
          let result = input.substring(0, length);
          document.getElementById("screen-bottom").innerHTML = result;
          //save result
          number = result;
      }
    break;
    
     
  default:{
      
    number += input.toString(10);
        document.getElementById("screen-bottom").innerHTML = number;
  
  }
} 
  
    
  
}

//works if you want to press + all the time and sum numbers, only impemented for +(and -) so far
function calcScreenNumberSwitching()
{
     if(result==="")
     {   
         result =  number; 
         number = document.getElementById("screen-bottom").innerHTML = "";
         document.getElementById("screen-top").innerHTML = result;
     }
     else if (operator === '+')
    {
        result = Number(result) + Number(number);
            document.getElementById("screen-top").innerHTML = result; 
            number = "";
                document.getElementById("screen-bottom").innerHTML = "";
                /*console.log(result);*/
        
    }    
       else if (operator === '-')
    {
        result = Number(result) - Number(number);
            document.getElementById("screen-top").innerHTML = result; 
            number = "";
                document.getElementById("screen-bottom").innerHTML = "";
                /*console.log(result);*/
        
    } 
  //document.getElementById("screen-bottom").innerHTML;
   
}
//works
function calcScreenNumberSwitching2()
{
    if(result==="")   result =  number;
    
  //document.getElementById("screen-bottom").innerHTML;
   number = document.getElementById("screen-bottom").innerHTML = "";
    number = "";
  document.getElementById("screen-top").innerHTML = result;
  
   
}
