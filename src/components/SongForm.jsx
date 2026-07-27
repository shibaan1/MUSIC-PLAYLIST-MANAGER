import React from 'react'

const SongForm = () => {
  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-box'>
          <button>close/cancel</button>
          <input type="text" placeholder='Song-Name' />
          <input type="text" placeholder='Artist Name' />
          <input type="url" placeholder='enter url' />
          <button>Add Song</button>
        </div>
      </div>
    </>
  )
}

export default SongForm
