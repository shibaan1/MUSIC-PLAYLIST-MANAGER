import React, { useContext, useState } from 'react'
import SongForm from './SongForm'
import { PlaylistContext } from '../context/playlistContext'
import SongItem from './SongItem'
import './PlaylistDrawer.css'

const PlaylistDrawer = ({ isOpen, onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  const { state, dispatch } = useContext(PlaylistContext)

  const currSong = state.songs.find((song) => song.id === state.currentSongId)
  const progressPercent = (state.currentTime / state.duration) * 100


  function handleclick() {
    if (state.isPlaying) {
      dispatch({ type: 'PAUSE_SONG' })
    }

    else {
      dispatch({ type: 'PLAY_SONG', payload: state.currentSongId })
    }
  }

  function handleinput(e) {

    setSearchText(e.target.value)
    if (e.target.value === '') {
      setSearchResults([])

    }
  }

  function timeConvert(inpTime) {
    const minutes = Math.floor(inpTime / 60)
    const seconds = Math.floor(inpTime % 60)

    const frmtSec = String(seconds).padStart(2, '0')

    return `${minutes}:${frmtSec}`
  }

  async function handleSearch() {
    const response = await fetch(`https://itunes.apple.com/search?term=${searchText}&media=music&limit=5`)
    const data = await response.json()

    setSearchResults(data.results)
  }

  return (
    <>
      {isOpen &&
        <div className='playlist-drawer'>
          <button className='close-btn' onClick={onClose}>close</button>

          <div className='search-container'>
            <input className='searchbar' type="search" placeholder='search song...' value={searchText} onChange={(e) => handleinput(e)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }} />

            <button className='modal-btn' onClick={() => setIsModalOpen(true)}>add song ++++</button>

            {isModalOpen && <SongForm onClose={() => setIsModalOpen(false)} />}
          </div>

          <hr />

          <div className='result-container'>

            {searchResults.length > 0 &&
              (
                <div className='search-result'>
                  {searchResults.map((result) => (

                    <div className='result-item' key={result.trackId}>
                      <p className='result-trackName'>{result.trackName}</p>
                      <p className='result-artistName'>{result.artistName}</p>
                      <button className='result-add-btn' onClick={() => {
                        dispatch({
                          type: 'ADD_SONG', payload: {

                            id: Date.now(),
                            title: result.trackName,
                            artist: result.artistName,
                            url: result.previewUrl,
                            imageUrl: result.artworkUrl100

                          }
                        })
                      }}>ADD</button>
                    </div>
                  ))}
                </div>
              )}
          </div>

          <div className='song-list'>

            {state.songs.map((song) => (

              <SongItem
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                url={song.url}
                imageUrl={song.imageUrl}
              />
            ))}
          </div>

          <div className='mini-player'>
            <div className='miniplayer-info'>
              <img className='mini-player-img' src={currSong?.imageUrl || 'https://placehold.co/50x50/4CAF50/ffffff?text=♪'} alt={currSong?.title} />
              <p>{currSong?.title}</p>
            </div>
            <div className='progressbar'>
              <div className='progressbar-fill' style={{ width: `${progressPercent}%` }}></div>
            </div>
            <button className='mini-player-btn' onClick={handleclick}>{state.isPlaying ? '⏸' : '▶'}</button>
          </div>
        </div>
      }
    </>
  )
}

export default PlaylistDrawer
