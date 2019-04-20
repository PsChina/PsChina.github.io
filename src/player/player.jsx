import React from 'react'
/**
 *
 */
function startUpdateProgress(myAudio) {
    clearInterval(this.timmer)
    this.timmer = setInterval(()=>{
        this.setState({
            currentProgress: {
                height: '20px',
                width: `${120*(myAudio.currentTime/myAudio.duration)}px`,
                background: 'red',
            },
        })
    }, 1000/60)
}

/**
 * @playSong
 * play a song
 */
function playOrPauseSong() {
    const myAudio = document.querySelector('#myAudio')
    if (myAudio&&myAudio.paused) {
        myAudio.play()
        this.setState({
            text: 'paused',
        })
        startUpdateProgress.call(this, myAudio)
    } else {
        clearInterval(this.timmer)
        myAudio.pause()
        this.setState({
            text: 'playSon',
        })
    }
}

/**
 * @class Player播放器类
 */
class Player extends React.Component {
    /**
     * 构造器
     */
    constructor() {
        super()
        this.state = {
            text: 'paused',
            currentName: '不能说的秘密',
            bg: {
                width: '200px',
                height: '20px',
                background: 'pink',
            },
            currentProgress: {
                height: '20px',
                width: '0',
                background: 'red',
            },
            timmer: null,
        }
    }
    /**
     *  一旦加载就更新进度条
     */
    componentDidMount() {
        startUpdateProgress.call(this, document.querySelector('#myAudio'))
    }
    /**
     * render函数
     * @retuen 返回一个jsx
     */
    render() {
        return (<div>
            <div>currentSong:{this.state.currentName}</div>
            <div style={this.state.bg}> <div style={this.state.currentProgress}></div> </div>
            <button onClick={playOrPauseSong.bind(this)}>{this.state.text}</button>
            <audio autoPlay={true} refs="myAudio" id="myAudio"
                src="https://pschina.github.io/src/player/music/%E4%B8%8D%E8%83%BD%E8%AF%B4%E7%9A%84%E7%A7%98%E5%AF%86.m4a">
            </audio>
        </div>)
    }
}

export default Player
