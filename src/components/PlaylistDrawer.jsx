import React from 'react'

const PlaylistDrawer = () => {
  return (
    <>
      <button>close</button>

      <div>
        <input type="search" placeholder='search song...' />
        <button>add song</button>
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
    </>
  )
}

export default PlaylistDrawer
