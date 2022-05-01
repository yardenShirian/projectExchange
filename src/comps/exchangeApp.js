import React, { useState } from 'react'
import Input from './input'
import Score from './score'
import DateTime from './dateTime';

export default function ExchangeApp() {

  const [res, setRes] = useState([]);

  return (
    <div className='container-fluid mx-auto p-1'>
      <div className='d-flex justify-content-center mt-2'>
        <h1 className='h-css text-center'>Coin<i class="fa fa-usd" aria-hidden="true"></i>  Ex<i class="fa fa-eur" aria-hidden="true"></i>hange  Calcula<i class="fa fa-try" aria-hidden="true"></i>
          or</h1>
        {/* <h1 className='display-1'>EX<a className='headerC'><i class="fa fa-eur" aria-hidden="true"></i>
          HANGE</a> CURRECNY</h1> */}
      </div>
      <Input setRes={setRes} />
      <Score res={res} />
        <DateTime />
       
    </div>
  )
}
