import React from 'react'

function Index({open,rooms,current}) {

    let room = rooms.find(e=> e.id === current)
  return (
    <div>{
        open ? 
        <div className='roomDetailIndex'>
           <div><span>Otaq No: </span>{room.roomNo}</div>
           <div><span>Müəssəsənin adı: </span>{room.company}</div>
           <div><span>Sahibkar: </span>{room.owner}</div>
           <div><span>Sahəsi m<sup>2</sup>: </span>{room.sahe}</div>
           <div><span>Məkan növü: </span>{room.roomType}</div>
        </div> : ""
    }
    </div>
  )
}

export default Index