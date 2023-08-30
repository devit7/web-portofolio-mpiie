import "../css/index.css"; // tailwind css
import Navbar from "../components/navbar";
import React, { Component } from 'react';
import indo from './img/indo.png';
import spp from './img/spp.png';
import valorunt from './img/valorunt.png';
import call from './img/call.png';
import own from './img/own-website.png';
import java from './img/java.png';

class Project extends Component {
    render() {
        return (
            <div className="bg-slate-950 min-h-screen text-white">
                <Navbar  isUsed={true}/>
                <div className="max-w-5xl font-mono mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    {/* Konten HTML */}
                    <div className="text-center">
                        <h2 className="text-2xl font-extrabold text-white sm:text-3xl glowing-text3">
                            Projects
                        </h2>
                        <p className="mt-4 text-base text-gray-300 glowing-text2">
                            this is my own project :3
                        </p>
                    </div>
                    {/* Konten Project */}
                    <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    My Own Website
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Hanya Sebuah Website Portofolio. Memiliki UI yang User Friendly dan Responsive.
                                        Memiliki Beberapa Page yang Bisa Kalian Lihat Sendiri. 
                                        BTW Jangan Coba Cari Page yang <b>/admin</b> Ya :3 
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            HTML
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            CSS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            JS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            React
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Tailwind
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            HeadlessUI
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={own} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>
                    {/* Konten Project */}
                        <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    Web Pembayaran SPP
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Memiliki Fitur Login, Register, CRUD, dan Laporan Pembayaran SPP.
                                        Sudah Menggunakan Skema Autorisasi JWT. User Friendly dan Responsive.
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            HTML
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            CSS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            JS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            React
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            NodeJS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            ExpressJS
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Mysql
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Bootstrap
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={spp} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>
                    {/* Konten Project */}
                    <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    External Cheat Valorant
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Memiliki Fitur Triggers Bot, Bhop, Color Setting, Auto Stop, Anti Afk, dan Sniper Mode.
                                        Ekternal Cheat Sehingga Tidak Dapat Terdeteksi Oleh Anti Cheat Valorant. Memiliki 6 Versi.
                                        Color Based, Pixel Based, dan Pattern Based. Menmiliki UI yang User Friendly.
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Ahk
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            UI
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Ini Config
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={valorunt} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>
                    {/* Konten Project */}
                    <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    Indo Gamepal Landing Page
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Hanya Sebuah Landing Page. Memiliki UI yang User Friendly dan Responsive.
                                        Terinspirasi Membuat Landing Page Karena Otak Saya Tidak Bisa Berhenti Berpikir[pada saat itu :3].
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Html
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Css
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Bootstrap
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={indo} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>

                    {/* Konten Project */}
                    <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    Aplikasi Dekstop Administrator Service Laptop
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Sebuah Aplikasi Dekstop Administrator Service Laptop. Memiliki Fitur Login, Register, CRUD, dan Laporan Service Laptop.
                                        Sangat UI yang User Friendly dan Responsive. Manajemen data dan Autorisasi yang baik. 
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Java
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            JavaSwing
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Mysql
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={java} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>

                 {/* Konten Project */}
                 <div className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    Kalkulator Sederhana
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                    <p>
                                        Sebuah Kalkulator Sederhana. Memiliki Fitur Penjumlahan, Pengurangan, Perkalian, Pembagian, dan Modulus.
                                        Sangat UI yang User Friendly dan Responsive. GGWP
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            JavaSrcipt
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Html
                                        </span>
                                        <span className="px-2 py-1 rounded bg-gray-800 text-xs font-bold mr-3 mb-3">
                                            Css
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={call} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Project;
