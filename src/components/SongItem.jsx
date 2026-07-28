import React, { useContext } from 'react'
import { PlaylistContext } from '../context/playlistContext'

const SongItem = ({ id, title, artist, url }) => {

  const { dispatch } = useContext(PlaylistContext)
  return (
    <div>

      <img src="" alt="" />

      <div>
        <p>{title}</p>
        <p>{artist}</p>
      </div>

      <div>
        <button>play</button>
        <button>⋮ menu</button>

        <div className='dropdown-menu'>
          <button onClick={() => dispatch({ type: 'DELETE_SONG', payload: id })}>Delete</button>
          <button>play next</button>
          <button>move to top</button>

        </div>
      </div>
    </div>
  )
}

export default SongItem
