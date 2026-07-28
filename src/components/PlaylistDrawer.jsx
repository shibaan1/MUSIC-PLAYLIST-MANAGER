import React, { useState } from 'react'
import SongForm from './SongForm'

const PlaylistDrawer = ({ isOpen, onClose }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isOpen &&
        <div>
          <button onClick={onClose}>close</button>

          <div>
            <input type="search" placeholder='search song...' />

            <button onClick={() => setIsModalOpen(true)}>add song ++++</button>

            {isModalOpen && <SongForm onClose= {() => setIsModalOpen(false)}/>}
          </div>

          <hr />

          <div className='songList'>

            <div className='song-item'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  <p>title</p>
                  <p>artist</p>
                </div>
              </div>

              <div>
                <button>play</button>
                <button>menu</button>
              </div>

            </div>
            <div className='song-item'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  <p>title</p>
                  <p>artist</p>
                </div>
              </div>

              <div>
                <button>play</button>
                <button>menu</button>
              </div>
            </div>

            <div className='song-item'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  <p>title</p>
                  <p>artist</p>
                </div>
              </div>

              <div>
                <button>play</button>
                <button>menu</button>
              </div></div>

          </div>

          <div>
            <img src="" alt="" />
            <p>song name</p>
            <div className='progressbar'></div>
            <button>play/pause</button>
          </div>
        </div>
      }

    </>
  )
}

export default PlaylistDrawer
