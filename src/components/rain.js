import React, { Component } from 'react';
import Navbar from '../components/navbar';
import '../css/rain.css'; // tailwind css

class rain extends Component {
    componentDidMount() {
        this.makeItRain();
    }

    makeItRain = () => {
        // Clear out everything
        const rainFrontRow = document.querySelector('.rain.front-row');
        const rainBackRow = document.querySelector('.rain.back-row');
        rainFrontRow.innerHTML = '';
        rainBackRow.innerHTML = '';

        let increment = 0;
        let drops = "";
        let backDrops = "";

        while (increment < 100) {
            // Generate random numbers
            const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
            const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            increment += randoFiver;

            // Add raindrops
            drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
            backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
        }

        rainFrontRow.innerHTML = drops;
        rainBackRow.innerHTML = backDrops;
    }

    handleSplatToggle = () => {
        document.body.classList.toggle('splat-toggle');
        this.makeItRain();
    }

    handleBackRowToggle = () => {
        document.body.classList.toggle('back-row-toggle');
        this.makeItRain();
    }

    handleSingleToggle = () => {
        document.body.classList.toggle('single-toggle');
        this.makeItRain();
    }

    render() {
        return (
            <div className="bg-slate-950 min-h-screen text-white">
                <Navbar />
                <div className="max-w-3xl font-mono mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    {/* Konten HTML */}
                    <div className="toggles">
                        <div className="splat-toggle toggle active" onClick={this.handleSplatToggle}>SPLAT</div>
                        <div className="back-row-toggle toggle active" onClick={this.handleBackRowToggle}>BACK<br />ROW</div>
                        <div className="single-toggle toggle" onClick={this.handleSingleToggle}>SINGLE</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default rain;
