import React, { useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import getsongs from "./data/data";

const App = () => {
    const [songs, setSongs] = useState(getsongs());
    const [selectSong, setSelectSong] = useState(songs[1]);
    const [isplay, setIsPlay] = useState(false);
    const [liBaz, setLiBaz] = useState(false);

    return (
        <div className="app">
            <Nav setLiBaz={setLiBaz} liBaz={liBaz} />
            <Song songs={getsongs} selectSong={selectSong} isplay={isplay} />
            <Player
                selectSong={selectSong}
                isplay={isplay}
                setIsPlay={setIsPlay}
                songs={songs}
                setSelectSong={setSelectSong}
            />
            <Library
                songs={songs}
                selectSong={selectSong}
                setSelectSong={setSelectSong}
                liBaz={liBaz}
            />
        </div>
    );
};

export default App;
