import React from "react";

const SongLibrary = ({ song, id, songs, setSelectSong, selectSong }) => {
    // handlers
    let a = [];
    const selectHandler = async () => {
        const aslSong = songs.filter((state) => state.id === id);
        await setSelectSong(aslSong[0]);
        const newSong = songs.map((s) => {
            if (s.id === id) {
                return { ...song, active: true };
            }
        });
    };


    return (
        <div className='SongLibrary' onClick={selectHandler}>
            <img src={song.img} alt="" />
            <div className="liitem">
                <h3>{song.name}</h3>
                <h5>{song.artist}</h5>
            </div>
        </div>
    );
};

export default SongLibrary;
