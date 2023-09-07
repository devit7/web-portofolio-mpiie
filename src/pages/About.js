import "../css/index.css"; // tailwind css
import Navbar from "../components/navbar";
import React, { Component } from 'react';
import { base_url } from "../config";
import axios from "axios";
import MatrixRain from '../components/MatrixRain';
import {SiGithub,SiYoutube,SiSteam,SiDiscord,SiLinkedin} from 'react-icons/si';
class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typingName: '',
            nameIndex: 0,
            names: 'DEVIT ERLINGGA',
            typingSpeed: 150,
            typingDirection: 1,
            proglanguage: [],
            about: [],
        };
    }

   

    startTyping = () => {
        const { nameIndex, names, typingSpeed, typingDirection } = this.state;
        const nameLength = names.length;

        this.typingTimer = setTimeout(() => {
            let nextIndex = nameIndex + typingDirection;

            if (nextIndex < 0 || nextIndex >= nameLength) {
                this.setState(prevState => ({
                    typingDirection: -prevState.typingDirection
                }));
            }

            this.setState({
                typingName: names.substring(0, nextIndex + 1),
                nameIndex: nextIndex
            });

            this.startTyping();
        }, typingSpeed);
    };

    getProglanguage=()=>{
        let url = base_url + "/proglanguage"
        axios.get(url )
        .then(response => {
            this.setState({proglanguage: response.data.data})
            console.log(response.data.data)
        })
        .catch(error => {
            if (error.response) {
                if(error.response.status) {
                    window.alert(error.response.data.message)
                    console.log(error.response.data.message)
                    console.log("error status" )
                }
            }else{
                console.log('data show')
                console.log("data"+this.state.proglanguage)
                console.log(error);
            }
        })
    }

    getAbout=()=>{
        let url = base_url + "/about"
        axios.get(url )
        .then(response => {
            this.setState({about: response.data.data})
            console.log(response.data.data)
        })
        .catch(error => {
            if (error.response) {
                if(error.response.status) {
                    window.alert(error.response.data.message)
                    console.log(error.response.data.message)
                    console.log("error status" )
                }
            }else{
                console.log('data show')
                console.log("data"+this.state.about)
                console.log(error);
            }
        })
    }

    componentDidMount() {
        this.startTyping();
        this.getProglanguage();
        this.getAbout();
    }

    componentWillUnmount() {
        clearTimeout(this.typingTimer);
    }
    
    render() {
        const { typingName } = this.state;
        return (
            <div className="bg-slate-950 min-h-screen text-white ">
                <Navbar  isUsed={true}/>
                <div className="max-w-3xl font-mono mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-white sm:text-3xl glowing-text3">
                            About Me
                        </h2>
                        <p className="mt-4 text-base text-gray-300 glowing-text2">
                            Hello! I'm {typingName}
                        </p>
                        {this.state.about.map((item, index) => {
                            return (
                                <p key={index} className="mt-4 text-base text-gray-300 glowing-text2">
                                    {item.description}
                                </p>
                            )
                        }
                        )}
                    </div>
                    
                {/* Conetent icon media sosial */}
                <div className="mt-10 text-center">
                    <h3 className=" text-1xl font-mono text-white  glowing-text3">
                        You can find me on here
                    </h3>
                        <div className="flex justify-center space-x-5 mt-10">
                            <a
                                href="https://www.youtube.com/channel/UC3AXK3m8Biqde410rD73IIQ"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Youtube</span>
                                <SiYoutube className="w-8 h-8" />
                            </a>
                            <a
                                href="https://github.com/devit7"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Github</span>
                                <SiGithub className="w-8 h-8" />
                            </a>
                            <a
                                href=" https://www.linkedin.com/in/devit-erlingga-arafiudin-448928213/"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Linkedin</span>
                                <SiLinkedin className="w-8 h-8" />
                            </a>
                            <a
                                href="https://steamcommunity.com/id/MpiieAsli"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Steam</span>
                                <SiSteam className="w-8 h-8" />
                            </a>
                            <a
                                href="639077760869990410"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">Discord</span>
                                <SiDiscord className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* my skill */}
                <div className="max-w-3xl font-mono mx-auto    ">
                        {/* skill */}
                        <div className="text-center">
                            <h3 className=" text-1xl font-mono text-white  glowing-text3">
                                Programming Language
                            </h3>
                                {/* dengan tulisan biasah tanpa icon */}
                                <div className="mt-10 flex flex-wrap justify-center">
                                        {this.state.proglanguage.map((item, index) => {
                                            return (
                                                <span key={index} className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                                    {item.name}
                                                </span>
                                            )
                                        }
                                        )}
                                        
                                        
                                </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default About;
