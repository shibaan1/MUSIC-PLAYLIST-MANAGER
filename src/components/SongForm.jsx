import React, { useContext, useState } from 'react'
import { PlaylistContext } from '../context/playlistContext'

const SongForm = ({ onClose }) => {

  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [url, setUrl] = useState('')
  const { state, dispatch } = useContext(PlaylistContext)

  function handleSubmit(e) {

    e.preventDefault()

    if (!title || !artist || !url) {
      alert('please fill all the fields')
      return
    }

    dispatch({ type: 'ADD_SONG', payload: { id: Date.now(), title: title, artist: artist, url: url } })

    onClose()
  }

  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-box'>
          <button onClick={onClose}>close/cancel</button>
          <input type="text" placeholder='Song-Name' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder='Artist Name' value={artist} onChange={(e) => setArtist(e.target.value)} />
          <input type="url" placeholder='enter url' value={url} onChange={(e) => setUrl(e.target.value)} />

          <button onClick={handleSubmit}>Add Song</button>

        </div>
      </div>
    </>
  )
}

export default SongForm
