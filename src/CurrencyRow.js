import React from 'react'

export default function CurrencyRow(props){

const{
  currencyOptions
}=props

  return(
    <div>
      <input type = "number" />
      <select>
        {currencyOptions.map(options =>(
          <option key= {options} value= {options}>{options}</option>
        ))}
      </select>
      
     </div>
    ) 
}
