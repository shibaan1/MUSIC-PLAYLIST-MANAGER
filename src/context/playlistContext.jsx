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

        case "PLAY_SONG":
            return { ...state, currentSongId: action.payload, isPlaying: true }

        case 'PAUSE_SONG':
            return { ...state, isPlaying: false }

        case 'TOGGLE_SHUFFLE':
            return { ...state, shuffle: !state.shuffle }

        case 'MOVE_UP':
{
            const sing = [...state.songs]
            const index = state.songs.findIndex(song => song.id === action.payload)

            if (index === 0) {
                return state
            }

            const temp = sing[index]
            sing[index] = sing[index - 1]
            sing[index - 1] = temp

            return { ...state, songs: sing }}

        case 'MOVE_DOWN':
{
            const songs = [...state.songs]
            const index = state.songs.findIndex(song => song.id === action.payload)

            if (index === songs.length - 1) {
                return state
            }

            const temp = songs[index]
            songs[index] = songs[index + 1]
            songs[index + 1] = temp

            return { ...state, songs }}

        case 'MOVE_TO_TOP':
{
            const songs = [...state.songs]
            const currsong = songs.find(song => song.id === action.payload)
            const remsongs = songs.filter(song => song.id !== action.payload)

            return { ...state, songs: [currsong, ...remsongs] }
}
        case 'PLAY_NEXT':{

            if (state.currentSongId === null) return state

            const songs2 = [...state.songs]

            const currpos = songs2.findIndex(song => song.id === state.currentSongId)
            const remind = songs2.findIndex(song => song.id === action.payload)

            const [taregtSong] = songs2.splice(remind, 1)
            songs2.splice(currpos + 1, 0, taregtSong)

            return { ...state, songs: songs2 }}

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