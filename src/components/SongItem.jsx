import React from 'react'

const SongItem = () => {
  return (
    <div>

      <img src="" alt="" />

      <div>
        <p>title</p>
        <p>artist</p>
      </div>

      <div>
        <button>play</button>
        <button>⋮ menu</button>

        <div className='dropdown-menu'>
          <button>Delete</button>
          <button>play next</button>
          <button>move to top</button>

        </div>
      </div>
    </div>
  )
}

export default SongItem
