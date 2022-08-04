/* eslint-disable */
import React, {useState} from 'react';
import './calculator.css'
import evaluate from './evaluate';
import { CalcUi } from './numPad';

const Calculator = () => {
  const [val, setVal] = useState('0');
  const [decimal, setDecimal] = useState(false);

  const [calc, setCalc] = useState(0);
  const [num1, setNum1] = useState(0);
  const [op, setOp] = useState();
  const [equal, setEqual] = useState(0)

  const numClick = (e) => {
    
    if (val == '0') {
      setVal(e.target.value)
      setNum1(e.target.value)
    } else {
      setVal(val + (e.target.value))
      setNum1(num1 + (e.target.value))
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
    setCalc(num1)

    try{

      setCalc(evaluate(op, calc, num1))

    } finally {
      setOp(e.target.value)
      setNum1(0)
    }
  }

  const decimalClick = (e) => {
    setVal(val + e.target.value)
    setNum1(num1 + e.target.value)
    setDecimal(true)
  }

  const clearVals = () => {
    setVal(0)
    setCalc(0)
    setEqual(0)
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
    let c = calc.toString()
    if(c === 0 || c.length <= 1){
      setCalc(0)
      setEqual(0)
    } else {
      if(isNaN(c?.charAt(c?.length - 1))){
        setCalc(parseInt(c?.substring(0, c?.length - 1)))
        setDecimal(false)
      } else {
        setCalc(parseInt(c?.substring(0, c?.length - 1)))
      }
    }
  }

  const calculate = () => {
    setNum1(evaluate(op, calc, num1))
    setCalc(evaluate(op, calc, num1))
    setVal((eval(val)).toString())
    setEqual(1)
    setOp()
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
      {equal? <div className='display2'>{calc}</div>: <></>}
    </>
  )
}

export default Calculator;