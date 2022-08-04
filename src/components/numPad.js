import React from 'react';
import { Button } from '@mui/material';
import './calculator.css'
  
export const CalcUi = ({
  numClick,
  operatorClick,
  decimalClick,
  clearVals,
  deleteVals,
  calculate,
  decimal,
  val
}) => {
  return(  
    <>
      <div className='wrapper'>
        <table className='numPad'>
          <thead>
            <tr>
              <td colSpan={4}>
                <div className='display'>{val}</div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button variant="outlined" onClick={clearVals} color="error">AC</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={deleteVals} color="error">⇐</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={operatorClick} value="/" >/</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={operatorClick} value="*" >*</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="outlined" onClick={numClick} value="7" >7</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={numClick} value="8" >8</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={numClick} value="9" >9</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={operatorClick} value="%" >%</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="outlined" onClick={numClick} value="4" >4</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={numClick} value="5" >5</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={numClick} value="6" >6</Button>
              </td>
              <td>
              <Button variant="outlined" onClick={operatorClick} value="-" >-</Button>
              </td>
            </tr>
            <tr>
              <td>
              <Button variant="outlined" onClick={numClick} value="1" >1</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={numClick} value="2" >2</Button>
              </td>
              <td>
              <Button variant="outlined" onClick={numClick} value="3" >3</Button>
              </td>
              <td>
                <Button variant="outlined" onClick={operatorClick} value="+" >+</Button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button 
                  style={{minWidth: '147px'}} 
                  variant="outlined" 
                  onClick={numClick}
                  value="0" 
                >
                  0
                </Button>
              </td>
              <td>
                <Button 
                  variant="outlined" 
                  onClick={decimalClick}
                  disabled={decimal} 
                  value="." 
                >
                  .
                </Button>
              </td>
              <td>
                <Button variant="outlined" onClick={calculate} >=</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}