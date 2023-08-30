import "../css/index.css"; // tailwind css
import Navbar from "../components/navbar";
import React, { Component } from 'react';
import axios from 'axios';

class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '',
            userAgent: window.navigator.userAgent,
            acceptLanguage: window.navigator.language,
            isLoading: true,
            percentage: 0 // Menambah state untuk persentase

        };
    }

    componentDidMount() {
        // Interval untuk mengupdate persentase setiap 100ms
        const interval = setInterval(() => {
            if (this.state.percentage < 100) {
                this.setState(prevState => ({
                    percentage: prevState.percentage + 1
                }));
            } else {
                clearInterval(interval); // Hentikan interval saat persentase mencapai 100
                this.loadData();
            }
        }, 50); // Mengupdate persentase setiap 50ms

        // Setelah 10 detik, hentikan interval dan muat data
        setTimeout(() => {
            clearInterval(interval);
            this.loadData();
        }, 10000);
    }

    loadData() {
        axios.get("https://api.ipify.org?format=json")
            .then(response => {
                this.setState({ ip: response.data.ip, isLoading: false });
            })
            .catch(error => {
                console.error("Error fetching IP:", error);
            });
    }
    //generate random number and string 10 digit
    randomString(length) {
        var result = '';
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];

        return result;
    }
    
    render() {
        const { isLoading, percentage } = this.state;

        return (
            <div className="bg-slate-950 min-h-screen text-white">
                <Navbar  isUsed={true}/>
                <div className="mt-10">
                    {/* Progress Bar */}
                    <div className="flex justify-center items-center mb-2">
                        {isLoading ? (
                            <div className="w-1/2">
                            <p className="text-center">Send Virus To Your MOM...</p>
                            <div className=" bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{ width: `${percentage}%` }}>
                                    {percentage}%
                                </div>
                            </div>
                            </div>
                        ) : (
                            <p className="text-center"> <b> Virus Has been Sent To Your Computer </b> </p>
                        )}
                    </div>

                    {/* Data */}
                    {!isLoading && (
                        <div className="text-center font-semibold">
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3" >Ip Addres: {this.state.ip}</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">User Agent: {this.state.userAgent}</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">Accept Language: {this.state.acceptLanguage}</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">Your Token: {this.randomString(20) }</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">Sending Zero-Day TCP Packet</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">Checking LocalDB Discord Token...</p>
                            <p className="bg-gray-800 px-2 py-1 mr-3 mb-3">{this.randomString(30)}</p>
                            {/* Spam Alert */}
                            {(() => {
                                for (let i = 0; i < 10000; i++) {
                                    setTimeout(() => {
                                        alert('Your Computer Has Been Hacked By Me h3h3h3');
                                    }, i * 1000); // Delay each alert by i seconds
                                }
                            })()}
                        </div>
                    )}

                </div>
            </div>
        );
    }
}

export default Secret;
