
import React, { Component } from 'react';
import '../css/index.css'; // tailwind css
import Navbar from '../components/navbar';
import nse1 from './img/1-associate-logo.png';
import nse2 from './img/2-associate-logo.png';
import nse3 from './img/3-associate-logo.png';
import { base_url } from '../config';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
class Kda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kda: [],
            isModalOpen: false,
            showModal: {},
            link: '',
        };
        this.handelClose=this.handelClose.bind(this)
    }

    getKda = () => {
        let url = base_url + "/kda";
        axios.get(url)
            .then(response => {
                this.setState({ kda: response.data.data });
                console.log(response.data.data);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status) {
                        window.alert(error.response.data.message);
                        console.log(error.response.data.message);
                        console.log("error status");
                    }
                } else {
                    console.log('data show');
                    console.log("data" + this.state.kda);
                    console.log(error);
                }
            });
    }
    // modal
    handelClose(){
        this.setState({isModalOpen:false})
    }

    //modal image
    IMG = selectionItem => {
        this.setState({
          isModalOpen: true,
          link: selectionItem.link,
        });
      }
      

    componentDidMount() {
        this.getKda();
    }

    render() {
        const { kda, isModalOpen } = this.state;


        // Filter data berdasarkan kategori dan level
        const challengeCertifications = kda.filter(item => item.category === 'Challenge' && item.level === 'Certification');
        const courseCertifications = kda.filter(item => item.category === 'Course' && item.level === 'Certification');
        const internshipCertifications = kda.filter(item => item.category === 'Internship' && item.level === 'Certification');
        const internationalCompetitions = kda.filter(item => item.category === 'International' && item.level === 'Competition');
        const nationalCompetitions = kda.filter(item => item.category === 'National' && item.level === 'Competition');

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
                                    <ul className="list-disc pl-6 ">
                                        {/* Changelle */}
                                        {challengeCertifications.map((item, index) => (
                                            <li className='glowing-text2' key={index}>
                                                {/* togell modal */}
                                                <a
                                                href="#"
                                                onClick={() => this.IMG(item)}
                                                >
                                                {item.description}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">Course</p>
                                    <ul className="list-disc pl-6 ">
                                        {/* Course */}
                                        {courseCertifications.map((item, index) => (
                                            <li className='glowing-text2' key={index}><a
                                            href="#"
                                            onClick={() => this.IMG(item)}
                                            >
                                            {item.description}
                                            </a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">Internship</p>
                                    <ul className="list-disc pl-6 ">
                                        {/* Internship */}
                                        {internshipCertifications.map((item, index) => (
                                            <li className='glowing-text2' key={index}><a
                                            href="#"
                                            onClick={() => this.IMG(item)}
                                            >
                                            {item.description}
                                            </a></li>
                                        ))}
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
                                        {/* International */}
                                        {internationalCompetitions.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link} >{item.description}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                </div>
                                <div>
                                    <p className="font-semibold glowing-text2">National</p>
                                    <ul className="list-disc pl-6 ">
                                        {/* National */}
                                        {nationalCompetitions.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link}>{item.description}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* modal */}
                <div>
  <Modal
    isOpen={isModalOpen}
    onRequestClose={this.handelClose}
    className="w-2/3 mx-auto mt-16 p-6  "
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div className="flex justify-end">
      <button
        onClick={this.handelClose}
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div className="flex justify-center">
      <img
        src={this.state.link}
        alt="img"
        className="w-full max-h-96 object-contain"
      />
    </div>
  </Modal>
</div>


                
            </div>
        );
    }
}

export default Kda;
