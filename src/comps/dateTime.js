import React, { useEffect, useState } from 'react'

export default function DateTime() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    update();
  }, [])

  const update = () => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
  }
  setInterval(update, 1000);

  return (
    <div className='' >
        <div className='mx-5 col-md-3 mx-auto text-center mt-5'>
          <h2>{time[1]}</h2>
          <h2>{time[0]}</h2>
        </div>

      <div className='ps-5 col-md-4' >
        <img src='https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjY5LTE0My14LmpwZw.jpg?s=QTPruqVV8lLHUarq-vun0msejHbEWadGMx3tWTsxqi0' className='imgBg' />
      </div>

    </div>
  )
}
