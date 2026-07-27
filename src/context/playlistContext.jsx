import React, { createContext, useReducer } from 'react'

const initialState = {
    songs: [],
    isPlaying: false,
    currentSongId: null,
    shuffle: false,

}

function PlaylistReducer(state, action) {

    switch (action.type) {
        case 'ADD_SONG':
            return { ...state, songs: [...state.songs, action.payload] }

        case 'DELETE_SONG':
            return { ...state, songs: state.songs.filter(song => song.id !== action.payload) }

        case "CLEAR_PLAYLIST":
            return { ...state, songs: [] }

        default:
            return state
    }
}

export const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PlaylistReducer, initialState)
    return (

        <PlaylistContext.Provider value={{ state, dispatch }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistProvider