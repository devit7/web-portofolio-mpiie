import React, { Component } from 'react';
import '../css/index.css'; // tailwind css
import Navbar from '../components/navbar';
import MatrixRain from '../components/MatrixRain';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Mpiie',
            typing: true,
            currentIndex: 0,
            flagVisible: false,
            flagIndex: 0,
            flagDirection: 1,
            isAudioPlaying: false,
        };

        this.textToType = 'Hello I am';
        this.textToType2 = 'flag{W3lc0m3_t0_my_p4g3_guy5_h0p3_y0u_3nj0y_1t}';
    }

    componentDidMount() {
        this.intervalName = setInterval(this.changeName, 3000);
        this.intervalType = setInterval(this.typingAnimation, 200);
        this.intervalFlag = setInterval(this.typingFlagAnimation, 100);

    }

    componentWillUnmount() {
        clearInterval(this.intervalName);
        clearInterval(this.intervalType);
        clearInterval(this.intervalFlag);

    }

    changeName = () => {
        this.setState((prevState) => ({
            name: prevState.name === 'Mpiie' ? 'パぱ泳' : 'Mpiie',
        }));
    };

    typingAnimation = () => {
        const { typing, currentIndex } = this.state;

        if (typing) {
            if (currentIndex < this.textToType.length) {
                this.setState((prevState) => ({
                    currentIndex: prevState.currentIndex + 1,
                }));
            } else {
                this.setState({ typing: false });
            }
        }
    };

    typingFlagAnimation = () => {
        const { flagVisible, flagIndex, flagDirection } = this.state;
        const flagLength = this.textToType2.length;

        if (flagVisible) {
            let nextIndex = flagIndex + flagDirection;

            if (nextIndex < 0 || nextIndex >= flagLength) {
                this.setState((prevState) => ({
                    flagDirection: -prevState.flagDirection,
                    flagIndex: prevState.flagDirection === 1 ? flagLength - 1 : 0,
                }));
            } else {
                this.setState({
                    flagIndex: nextIndex,
                });
            }
        } else {
            this.setState({
                flagVisible: true,
            });
        }
    };
    toggleAudio = () => {
        this.setState(
            (prevState) => ({
                isAudioPlaying: !prevState.isAudioPlaying,
            }),
            () => {
                const { isAudioPlaying } = this.state;
                const audio = document.getElementById('backgroundAudio'); // Replace 'backgroundAudio' with the actual id of your audio element
    
                if (isAudioPlaying) {
                    audio.play().catch(error => {
                        // Autoplay was prevented, let's handle it here.
                        // You can show a user-initiated play button or handle it as you prefer.
                    });
                } else {
                    audio.pause();
                }
            }
        );
    };


    render() {
        const { typing, currentIndex, flagVisible, flagIndex, flagDirection } = this.state;

        return (
            <div className="bg-slate-950 min-h-screen text-white flex flex-col relative">
                <div className="absolute z-0 w-full h-full">
                    <MatrixRain/>
                </div>
                <Navbar />
                {/* PLAY ME*/}
                <div className="flex  relative">
                    <a
                        href="#"
                        onClick={this.toggleAudio}
                        className="animate-bounce glow text-white font-mono py-2 px-4 rounded-full"
                    >
                        {this.state.isAudioPlaying ? "[ PAUSE ]" : "[ PLAY ME ]"}
                    </a>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center relative">
                    <div className="flex items-center">
                        <h1 className="font-mono glowing-text text-lg">
                            {this.textToType.substring(0, currentIndex)}
                        </h1>
                        <h1 className="font-mono ml-2 text-lg glowing-text" id="name">
                            {typing ? '|' : this.state.name}
                        </h1>
                    </div>
                    <hr className="border-t border-gray-400 my-4 w-16" />
                    <div className="flex items-center">
                        {flagVisible && (
                            <h1 className="font-mono glowing-text text-lg" id="flag">
                                {this.textToType2.substring(0, flagIndex + 1)}
                                <span style={{ marginLeft: flagDirection === 1 ? 4 : 0 }}>_</span>
                            </h1>
                        )}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;