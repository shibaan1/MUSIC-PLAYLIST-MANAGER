import React, { useContext } from 'react'
import { PlaylistContext } from '../context/playlistContext'

const SongItem = ({ id, title, artist, url }) => {

  const { state, dispatch } = useContext(PlaylistContext)

  function handleClick() {
    if (state.currentSongId === id && state.isPlaying === true) {
      dispatch({ type: 'PAUSE_SONG' })
    }

    else {
      dispatch({ type: 'PLAY_SONG', payload: id })
    }
  }
  return (
    <div>

      <img src="" alt="" />

      <div>
        <p>{title}</p>
        <p>{artist}</p>
      </div>

      <div>
        <button onClick={handleClick}>play</button>
        <button>⋮ menu</button>

        <div className='dropdown-menu'>
          <button onClick={() => dispatch({ type: 'DELETE_SONG', payload: id })}>Delete</button>
          <button onClick={() => dispatch({ type: 'PLAY_NEXT', payload: id })}>play next</button>
          <button onClick={() => dispatch({ type: 'MOVE_TO_TOP', payload: id })}>move to top</button>

        </div>
      </div>
    </div>
  )
}

export default SongItem
