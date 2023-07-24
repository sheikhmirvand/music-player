import React from "react";
import SongLibrary from "./SongLibrary";

const Library = ({ songs, selectSong, setSelectSong, liBaz }) => {
    return (
        <div className={`library ${liBaz ? '' : 'baste'}`}>
            <h2>my songs</h2>
            {songs.map((s) => (
                <SongLibrary
                    key={s.id}
                    id={s.id}
                    songs={songs}
                    song={s}
                    selectSong={selectSong}
                    setSelectSong={setSelectSong}
                />
            ))}
        </div>
    );
};

export default Library;
