import React from "react";
import Navbar from "../components/navbar";
import { base_url } from "../config";
import axios from "axios";
import { Component } from "react";
import "../css/index.css" // tailwind css-project/pembayaran_spp/frontend/admin-pembayaran-spp/src/config";

class Test extends Component {
    constructor(){
        super()
        this.state = {

            action: "",
            user:[],
            about:[],
            kda:[],
            proglanguage:[],
            programproject:[],
            project:[],

    }

}

    getUser=()=>{
        let url = base_url + "/user"
        axios.get(url )
        .then(response => {
            this.setState({user: response.data.data})
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
                console.log("data"+this.state.user)
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

    getKda=()=>{
        let url = base_url + "/kda"
        axios.get(url )
        .then(response => {
            this.setState({kda: response.data.data})
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
                console.log("data"+this.state.kda)
                console.log(error);
            }
        })
    }

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

    getProgramproject=()=>{
        let url = base_url + "/programproject"
        axios.get(url )
        .then(response => {
            this.setState({programproject: response.data.data})
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
                console.log("data"+this.state.programproject)
                console.log(error);
            }
        })
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





    componentDidMount(){
        this.getUser()
        this.getAbout()
        this.getKda()
        this.getProglanguage()
        this.getProgramproject()
        this.getProject()
    }


  render() {
    return (
      <div >
        <h1>Test</h1>
        {/* table show data */}
                
                    <table className="border" >
                        <thead>
                            <tr>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
                                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Password</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.user.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td className="w-1/3 text-left py-3 px-4">{item.id}</td>
                                        <td className="w-1/3 text-left py-3 px-4">{item.nama}</td>
                                        <td className="text-left py-3 px-4">{item.username}</td>
                                        <td className="text-left py-3 px-4">{item.password}</td>
                                        <td className="text-left py-3 px-4">{item.role}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1>about table</h1>
                    <table className="border" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.about.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1>kda table</h1>
                    <table className="border" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>category</th>
                                <th>level</th>
                                <th>description</th>
                                <th>link</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.kda.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.category}</td>
                                        <td>{item.level}</td>
                                        <td>{item.description}</td>
                                        <td>{item.link}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1>proglanguage table</h1>
                    <table className="border" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.proglanguage.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1>programproject table</h1>
                    <table className="border" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nama project</th>
                                <th>nama program yang digunakan</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.programproject.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nama_project}</td>
                                        <td>{item.nama_program_yang_digunakan}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h1>project table</h1>
                    <table className="border" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>description</th>
                                <th>image</th>
                                <th>link project</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {this.state.project.map((item,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.image}</td>
                                        <td>{item.link_project}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>





                </div>
                

    );
  }
}
export default Test;