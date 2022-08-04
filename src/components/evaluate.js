const evaluate = (op, calc, num1) => {
  switch(op){
    case "+":
      return(calc + parseFloat(num1))
      
    case "-":    
      return(calc - parseFloat(num1))
      
    case "*":    
      return(calc * parseFloat(num1))
      
    case "/":    
      return(calc / parseFloat(num1))
      
    case "%":    
      return(calc % parseFloat(num1))
      
    default:
      return(parseFloat(num1))
  }
}

export default evaluate;