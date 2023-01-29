import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
       <div className='errorPage'>
         <div>
            <h1>Səhifə tapılmadı</h1>
            <Link to='/'><button className='btn btn-primary'>Esas sehifeye qayit</button></Link>
         </div>
       </div>
    </>
  )
}

export default Page404