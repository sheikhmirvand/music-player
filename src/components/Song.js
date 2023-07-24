import React from 'react'

const Song = ({selectSong,isplay}) => {
    
  return (
    <div className='song'>
      <img src={selectSong.img} className={isplay ? 'charkh' : 'nacharkh'} alt="" />
      <h3>{selectSong.name}</h3>
      <h4>{selectSong.artist}</h4>
    </div>
  )
}

export default Song