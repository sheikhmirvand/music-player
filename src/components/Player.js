import React, { useRef, useState } from "react";

const Player = ({ selectSong, isplay, setIsPlay, songs, setSelectSong }) => {
    // states
    const [timeLine, setTimeLine] = useState({
        currentTime: 0,
        durationTime: 0,
    });
    const [volume, setVolume] = useState(1);
    const [showLeftTime, setShowLeftTime] = useState(true);
    const [speedState, setSpeedState] = useState(1);

    // refs
    const audioRef = useRef(null);
    // handlers
    const puseHandler = () => {
        if (isplay) {
            audioRef.current.pause();
            setIsPlay(!isplay);
        } else {
            audioRef.current.play();
            setIsPlay(!isplay);
        }
    };

    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const audioHandler = (e) => {
        setTimeLine({
            ...timeLine,
            currentTime: e.target.currentTime,
            durationTime: e.target.duration,
        });
    };

    const timeLineHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setTimeLine({ ...timeLine, currentTime: e.target.value });
    };

    const forwardHandler = (amal) => {
        let nowMusic = songs.findIndex((song) => song.id === selectSong.id);
        if (amal === "next") {
            setSelectSong(songs[nowMusic + 1]);
        } else if (amal === "back") {
            setSelectSong(songs[nowMusic - 1]);
        }
    };

    const volumeHandlet = (e) => {
        audioRef.current.volume = e.target.value;
        setVolume(e.target.value);
        console.log(volume);
    };

    const generateValue = (value) => {
        if (value == 0) {
            return "off";
        } else if (value <= 0.7) {
            return "low";
        } else {
            return "high";
        }
    };

    const speedHandler = (addormin) => {
        audioRef.current.playbackRate = speedState;
        if (addormin === "add") {
            if (speedState < 5) {
                setSpeedState(speedState + 0.25);
            }
        } else {
            if (speedState > 0) {
                setSpeedState(speedState - 0.25);
            }
        }
    };

    return (
        <div>
            <div className="player">
                <div className="controller">
                    <p>{getTime(timeLine.currentTime)}</p>
                    <input
                        type="range"
                        min={0}
                        max={timeLine.durationTime}
                        value={timeLine.currentTime}
                        onChange={timeLineHandler}
                    />
                    <p
                        onClick={() => setShowLeftTime(!showLeftTime)}
                        className="timeShow"
                    >
                        {showLeftTime
                            ? getTime(
                                  timeLine.durationTime - timeLine.currentTime
                              )
                            : getTime(timeLine.durationTime)}
                    </p>
                    <p>
                        <i
                            className={`fa-solid fa-volume-${generateValue(
                                volume
                            )}`}
                        ></i>
                    </p>
                    <input
                        type="range"
                        className="volume"
                        onChange={volumeHandlet}
                        max={1.0}
                        min={0.0}
                        step={0.1}
                    />
                </div>
                <div className="playPuse">
                    <p>
                        <i
                            className="fa-solid fa-forward bargasht"
                            onClick={() => forwardHandler("back")}
                        ></i>
                    </p>
                    <h2 onClick={puseHandler}>
                        <i
                            className={`fa-solid fa-${
                                isplay ? "pause" : "play"
                            }`}
                        ></i>
                    </h2>
                    <p onClick={() => forwardHandler("next")}>
                        <i className="fa-solid fa-forward"></i>
                    </p>
                </div>
                <div className="speed">
                    <button onClick={() => speedHandler("kam")}>slow</button>
                    <strong>{`speed : ${speedState}`}</strong>
                    <button onClick={() => speedHandler("add")}>fast</button>
                </div>
                <audio
                    onTimeUpdate={audioHandler}
                    src={selectSong.src}
                    ref={audioRef}
                ></audio>
            </div>
        </div>
    );
};

export default Player;
