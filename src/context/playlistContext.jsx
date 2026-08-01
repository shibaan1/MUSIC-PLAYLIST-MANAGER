import React, { createContext, useEffect, useReducer, useRef } from 'react'

const initialState = {
    songs: [
        { id: 1, title: 'Song 1', artist: 'Artist 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
        { id: 2, title: 'Song 2', artist: 'Artist 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
        { id: 3, title: 'Song 3', artist: 'Artist 3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
        { id: 4, title: 'Song 4', artist: 'Artist 4', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
        { id: 5, title: 'Song 5', artist: 'Artist 5', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
        { id: 6, title: 'Song 6', artist: 'Artist 6', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
        { id: 7, title: 'Song 7', artist: 'Artist 7', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },

    ],
    isPlaying: false,
    currentSongId: null,
    shuffle: false,
    currentTime: 0,
    duration: 0,
    loop: false

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

                return { ...state, songs: sing }
            }

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

                return { ...state, songs }
            }

        case 'MOVE_TO_TOP':
            {
                const songs = [...state.songs]
                const currsong = songs.find(song => song.id === action.payload)
                const remsongs = songs.filter(song => song.id !== action.payload)

                return { ...state, songs: [currsong, ...remsongs] }
            }
        case 'PLAY_NEXT':
            {
                if (state.currentSongId === null) return state

                const songs2 = [...state.songs]

                const currpos = songs2.findIndex(song => song.id === state.currentSongId)
                const remind = songs2.findIndex(song => song.id === action.payload)

                const [taregtSong] = songs2.splice(remind, 1)
                songs2.splice(currpos + 1, 0, taregtSong)

                return { ...state, songs: songs2 }
            }

        case 'SET_TIME':
            {
                return { ...state, currentTime: action.payload }
            }

        case 'SET_DURATION':
            {
                return { ...state, duration: action.payload }
            }

        case 'TOGGLE_LOOP':
            {
                return { ...state, loop: !state.loop }
            }
        default:
            return state
    }
}

export const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {

    const [state, dispatch] = useReducer(PlaylistReducer, initialState)
    const audioRef = useRef(null)
    const loopRef = useRef(state.loop)

    useEffect(() => {
      
        loopRef.current = state.loop
    }, [state.loop])
    

    useEffect(() => {

        if (state.currentSongId === null) { return }
        const currSong = state.songs.find((song) => song.id === state.currentSongId)

        audioRef.current = new Audio(currSong.url)

        if (state.isPlaying) {
            audioRef.current.play()

        }

        audioRef.current.ontimeupdate = () => {
            dispatch({ type: 'SET_TIME', payload: audioRef.current.currentTime })
        }

        audioRef.current.onloadedmetadata = () => {
            dispatch({ type: 'SET_DURATION', payload: audioRef.current.duration })
        }

        audioRef.current.onended = () => {

            if (loopRef.current) {
                audioRef.current.play()
            }

        }
        return () => {
            audioRef.current.pause()
        }

    }, [state.currentSongId])

    useEffect(() => {

        if (!audioRef.current) { return }

        if (state.isPlaying) {
            audioRef.current.play()

        }
        else {
            audioRef.current.pause()
        }

        return () => {
            audioRef.current.pause()
        }
    }, [state.isPlaying])

    return (

        <PlaylistContext.Provider value={{ state, dispatch }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistProvider