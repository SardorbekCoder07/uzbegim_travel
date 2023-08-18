import './Spinners.css'
import { RotateSpinner } from 'react-spinners-kit';
import { useEffect, useState } from 'react';
import Page1 from '../Page1/Page1';



function Spinners() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (

    <div>
      {loading ?
        <div className='sweet-loading'>
          <RotateSpinner color="#fff" size={150} />
        </div>
        :
        <Page1 />
      }
    </div>
  )
}

export default Spinners;