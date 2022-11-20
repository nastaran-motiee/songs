import React from "react";
import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'Mazurka in A Minor, Op. 67 No. 4 (Chopin)' , duration: '6:20'},
        {title: 'Divertimento, K. 334: Menuet (Mozart)', duration: '7:30'},
        {title: 'Hungarian Dance No. 1, WoO 1 (Brahms)', duration: '8:40'},
        {title: 'Morceaux, Op. 10: No. 2, Humoresque in G Major. Menuet (Bocherini)', duration: '10:12'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers(
    {
        songs: songsReducer,
        selectedSong: selectedSongReducer
    }
);