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
            id: "",
            name: "",
            username: "",
            password: "",
            role: "",
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

    componentDidMount(){
        this.getUser()
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
                </div>

    );
  }
}
export default Test;