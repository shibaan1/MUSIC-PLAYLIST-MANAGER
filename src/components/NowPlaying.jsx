import React from 'react'


// A button to open the playlist drawer (top left)
// Album art (generic music icon for now)
// Song title
// Artist name
// Progress bar with current time and total duration
// Controls row: shuffle — previous — play/pause — next — loop

// Write the HTML structure only. Use placeholder text like "Song Title", "Artist Name", "0:00" for now. No logic, no state, no props yet.

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
