import React, { useContext, useState } from 'react'
import { PlaylistContext } from '../context/playlistContext'
import './SongItem.css'

const SongItem = ({ id, title, artist, url }) => {

  const { state, dispatch } = useContext(PlaylistContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleDropdown() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  function handleClick() {

    if (state.currentSongId === id && state.isPlaying === true) {
      dispatch({ type: 'PAUSE_SONG' })
    }

    else {
      dispatch({ type: 'PLAY_SONG', payload: id })
    }
  }
  return (
    <div className='song-item'>

      <img className='song-img' src="" alt="" />

      <div className='item-info'>
        <p className='item-title'>{title}</p>
        <p className='item-artist'>{artist}</p>
      </div>

      <div className='item-controls'>
        <button className='item-play-btn' onClick={handleClick}>play</button>
        <button className='menu-btn' onClick={handleDropdown}>⋮ menu</button>

        {isDropdownOpen && (
          <div className='dropdown-menu'>
            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE_SONG', payload: id })}>Delete</button>
            <button className=' playnext-btn' onClick={() => dispatch({ type: 'PLAY_NEXT', payload: id })}>play next</button>
            <button className='movetotop-btn' onClick={() => dispatch({ type: 'MOVE_TO_TOP', payload: id })}>move to top</button>

          </div>
        )}
      </div>
    </div>
  )
}

export default SongItem
