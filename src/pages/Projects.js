import "../css/index.css"; // tailwind css
import Navbar from "../components/navbar";
import React, { Component } from 'react';
import { base_url } from "../config";
import axios from "axios";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [],
            projectByTitle: [],
        }
    }

    getProject=()=>{
        let url = base_url + "/project"
        axios.get(url )
        .then(response => {
            this.setState({project: response.data.data})
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
                console.log("data"+this.state.project)
                console.log(error);
            }
        })
    }

    getProjectByTitle = (title) => {
        let url = base_url + "/programproject/" + title;
        axios
            .get(url)
            .then((response) => {
                this.setState({ projectByTitle: response.data.data });
                console.log(response.data.data);
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status) {
                        window.alert(error.response.data.message);
                        console.log(error.response.data.message);
                        console.log("error status");
                    }
                } else {
                    console.log("data show");
                    console.log("data" + this.state.projectByTitle);
                    console.log(error);
                }
            });
    };

    getAll = () => {
        let projectUrl = base_url + "/project";
        axios.get(projectUrl)
            .then(response => {
                const projectData = response.data.data;
    
                // Ambil data program yang digunakan
                let programUrl = base_url + "/programproject";
                axios.get(programUrl)
                    .then(programResponse => {
                        const programData = programResponse.data.data;
    
                        // Gabungkan data program ke dalam data proyek
                        const updatedProjectData = projectData.map(project => {
                            const programs = programData.filter(program => program.nama_project === project.title);
                            return { ...project, programs };
                        });
    
                        // Urutkan data berdasarkan id secara terbalik
                        const sortedProjects = updatedProjectData.slice().reverse();
    
                        this.setState({ project: sortedProjects });
                    })
                    .catch(error => {
                        // Handle error jika permintaan program gagal
                        console.error(error);
                    });
            })
            .catch(error => {
                // Handle error jika permintaan proyek gagal
                console.error(error);
            });
    }

    


    componentDidMount() {
        // Ambil data proyek
        this.getAll();

    }
    
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
                    {this.state.project.map((item,index) => {
                                        return(
                    <div key={index} className="mt-10 bg-slate-900 overflow-hidden shadow rounded-lg flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 px-4 py-5  sm:p-6">
                                <h3 className="text-lg leading-6 font-medium text-white glowing-text3">
                                    {item.title}
                                </h3>
                                <div className="mt-2 max-w-md text-sm text-gray-300">
                                        <p  >
                                            {item.description}
                                        </p>
                                </div>
                                <div className="mt-5">
                                    <a
                                        href={item.link_project}
                                        className="text-sm font-medium text-white hover:text-gray-400"
                                    >
                                        Learn more<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                                <div>
                                    {/* berisi bahasa pemrograman yang di gunakan dan framefork dengan icon*/}
                                    <div className="mt-2 flex flex-wrap">
                                    {item.programs.map((lang, index) => {
                                        return(
                                            <span
                                                key={index}
                                                className="px-2 py-1 rounded bg-gray-800 text-xs font-bold text-white mr-3 mb-3"
                                            >
                                                {lang.nama_program_yang_digunakan}
                                            </span>
                                        )
                                    })}
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-1/2 px-4 py-5 sm:p-6 flex justify-center items-center">
                            <img src={item.image} alt="gambar" className="max-w-full h-auto img-no-padding" />
                        </div>
                    
                    </div>
                    )
                    })}

                    {/* End Konten */}
                </div>
            </div>
        );
    }
}

export default Project;
