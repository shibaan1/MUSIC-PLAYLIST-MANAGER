import React from 'react'

const NowPlaying = () => {
  return (
    <>
      <button>open playlist</button>
      <img src="" alt="" />

      <div>
        <p>song title</p>
        <p> artist name</p>
      </div>

      <div>
        <span>0:00</span>
        <div className='progressbar'>
          <div className='progress-fill'></div>
        </div>
        <span>0:00</span>
      </div>

      <div>
        <button>shuffle</button>
        <button>previous</button>
        <button>play/pause</button>
        <button>next</button>
        <button>loop</button>
      </div>
    </>
  )
}

export default NowPlaying
