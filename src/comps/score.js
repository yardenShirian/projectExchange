import React from 'react'

export default function Score(props) {

  return (
    <div className='d-flex justify-content-center mt-5'>
      <h2>{props.res[0]}<a className='a'>aa</a><i class="fa fa-arrows-h" aria-hidden="true"></i><a className='a'>aa</a>{props.res[1]}</h2>
    </div>

  )
}
