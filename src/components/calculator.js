/* eslint-disable */
import React, {useState} from 'react';
import './calculator.css'
import { CalcUi } from './numPad';

const Calculator = () => {
  const [val, setVal] = useState('0');
  const [decimal, setDecimal] = useState(false);

  const numClick = (e) => {
    
    if (val == '0') {
      setVal(e.target.value)
    } else {
      setVal(val + (e.target.value))
    }
  }

  const operatorClick = (e) => {
    if(val == 0)
    {
      if(e.target.value == "-" || e.target.value == "+")
      {
        setVal(e.target.value)
      } else {
        setVal(val + (e.target.value));
      }
    } else {
      setVal(val + (e.target.value))
    }
    setDecimal(false)
  }

  const decimalClick = (e) => {
    setVal(val + e.target.value)
    setDecimal(true)
  }

  const clearVals = () => {
    setVal(0)
    setDecimal(false)
  }

  const deleteVals = () => {
    if(val === 0 || val.length <= 1){
      setVal(0)
    } else {
      if(isNaN(val?.charAt(val?.length - 1))){
        setVal(val?.substring(0, val?.length - 1))
        setDecimal(false)
      } else {
        setVal(val?.substring(0, val?.length - 1))
      }
    }
  }

  const calculate = () => {
    setVal((eval(val)).toString())
    setDecimal(false)
  }

  return(
    <>
      <CalcUi
        numClick = {(e) => numClick(e)}
        operatorClick = {(e) => operatorClick(e)}
        decimalClick = {(e) => decimalClick(e)}
        clearVals = {() => clearVals()}
        deleteVals = {() => deleteVals()}
        calculate = {() => calculate()}
        decimal = {decimal}
        val = {val}
      />
    </>
  )
}

export default Calculator;
//comment
// git commit -a -m "commit" (do not need commit message either)
// git push