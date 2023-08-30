
import React, { Component } from 'react';
import '../css/index.css'; // tailwind css
import Navbar from '../components/navbar';
import nse1 from './img/1-associate-logo.png';
import nse2 from './img/2-associate-logo.png';
import nse3 from './img/3-associate-logo.png';

class Kda extends Component {

    render() {
        return (
            <div className="bg-slate-950 min-h-screen  text-white">
                <Navbar  isUsed={true} />
                {/* Content */}
                <div className="flex flex-col items-center justify-center py-5 font-mono">
                    {/* Achievement */}
                    <div className="text-white  text-center">
                        <h2 className="text-2xl glowing-text3 font-semibold mb-2">Network Security Expert (NSE)</h2>
                        <div className="flex space-x-4 items-center justify-center">
                            <div className="flex justify-center flex-col items-center">
                                <img src={nse1} alt="NSE 1" className="w-20 mx-auto" />
                                <span className="text-sm">NSE 1</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={nse2} alt="NSE 2" className="w-20 mx-auto" />
                                <span className="text-sm">NSE 2</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={nse3} alt="NSE 3" className="w-20 mx-auto" />
                                <span className="text-sm">NSE 3</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full max-w-3xl p-6 space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="w-full lg:w-1/2">
                            {/* Sertifikat */}
                            <div className="text-white p-4">
                                <h2 className="text-2xl font-semibold mb-2 glowing-text3">Certification</h2>
                                <div className="mb-2">
                                    <p className="font-semibold glowing-text2">Challenge</p>
                                    <ul className="list-disc pl-6 glowing-text2">
                                        <li>Sertifikat Finalis Capture The Flag Find IT!</li>
                                        <li>Programming FIK FAIR 2022</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">Course</p>
                                    <ul className="list-disc pl-6 glowing-text2">
                                        <li>Dicoding Git dengan GitHub</li>
                                        <li>Dicoding Structured Query Language (SQL)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">Internship</p>
                                    <ul className="list-disc pl-6 glowing-text2">
                                        <li>Internship PT. Sentral Fintek Indonesia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                         {/* Kompetisi */}
                            <div className="text-white p-4">
                                <h2 className="text-2xl font-semibold mb-2 glowing-text3">Competition</h2>
                                <div className="mb-2">
                                    <p className="font-semibold glowing-text2">International</p>
                                    <ul className="list-disc pl-6 ">
                                        <li className='glowing-text2' ><a href="#">Imaginary Ctf 2023 (156 of 879)</a></li>
                                        <li className='glowing-text2'><a href="#">DeconstruCT.F 2023 (112 of 322)</a></li>
                                        <li className='glowing-text2'><a href="https://github.com/devit7/CTF-Writeup-Mpiie/tree/main/Hackon%20CTF%202023">H4ckc0n CTF 2023 (57 of 286)</a></li>
                                        <li className='glowing-text2'><a href="#">Cyber Jawara 2023</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">National</p>
                                    <ul className="list-disc pl-6 ">
                                        <li className='glowing-text2'><a href="#">Capture The Flag Find IT! (Finalist)</a></li>
                                        <li className='glowing-text2'><a href="https://github.com/devit7/CTF-Writeup-Mpiie/tree/main/gemastik2023">Cyber Security Gemastik 2023</a></li>
                                        <li className='glowing-text2'><a href="#">Programming FIK FAIR 2022</a></li>
                                        <li className='glowing-text2'><a href="https://github.com/devit7/CTF-Writeup-Mpiie/tree/main/0bytectf2023">0byteCtf 2023</a></li>
                                        <li className='glowing-text2'><a href="#">CTF Compfest 2023</a></li>
                                        <li className='glowing-text2'><a href="#">CTF Hackathon BPJS Kesehatan 2023</a></li>
                                        <li className='glowing-text2'><a href="#">CTF Competition IFEST 2023</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Kda;
