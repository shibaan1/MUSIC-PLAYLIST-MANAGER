import React, { useContext, useState } from 'react'
import { PlaylistContext } from '../context/playlistContext'
import './SongForm.css'

const SongForm = ({ onClose }) => {

  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [url, setUrl] = useState('')
  const [img, setimg] = useState('')
  const { state, dispatch } = useContext(PlaylistContext)

  function handleSubmit(e) {

    e.preventDefault()

    if (!title || !artist || !url) {
      alert('please fill all the fields')
      return
    }

    if (state.songs.some(song => song.url === url)) {
      alert('SONG ALREADY EXIST')

    }
    else {
      dispatch({ type: 'ADD_SONG', payload: { id: Date.now(), title: title, artist: artist, url: url, imageUrl: img || 'https://via.placeholder.com/50x50/4CAF50/ffffff?text=♪' } })
    }

    onClose()
  }

  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-box'>
          <button className='modal-close-btn' onClick={onClose}>close/cancel</button>
          <input className='modal-title-input' type="text" placeholder='Song-Name' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className='modal-artist-input' type="text" placeholder='Artist Name' value={artist} onChange={(e) => setArtist(e.target.value)} />
          <input className='modal-url-input' type="url" placeholder='enter url' value={url} onChange={(e) => setUrl(e.target.value)} />
          <input className='modal-img-url' type="url" placeholder='image url (optional)' value={img} onChange={(e) => setimg(e.target.value)} />

          <button className='modal-submit-btn' onClick={handleSubmit}>Add Song</button>

        </div>
      </div>
    </>
  )
}

export default SongForm
