// Profile component is to generate the Profile Card
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Profile.css';
import Logo from '../../Images/Avatar.png';
import Sidebar from '../Sidebar/Sidebar.js';
import { format } from "date-fns";

function Profile(){
    const url = 'https://6155a05293e3550017b08b11.mockapi.io/users';
    const [profiles, setProfiles] = useState([]);
    const [count, setCount] = useState(3);

    let ProfileTime =[];

    useEffect(()=> {
        //By using this Hook, you tell React that your component needs to do something after render
        //after url changes, the code in the useEffect() will run/ re-run
        axios.get(`${url}`)
        .then(res => {
            for(const dataLine of res.data){
                ProfileTime.push(format(new Date(dataLine.createdAt), "H:mma"));
            }
            setProfiles(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [url])


    return (
        <div>
            <Sidebar/>
            { (profiles.length > 0) ? 
            profiles.slice(0,count).map( (profile, index) => {
            return (
                
                <div className="card" >
                    <div key={ index }></div>
                    
                        <div className="card__image-txt-container"> 
                            
                            <div ><img src={Logo} alt="Profile Pic"/></div>
                            <div className="card__body">
                                <div className="card__title">{profile.name}</div>
                                <div className="card__body_text">Email: {profile.email}</div>
                                <div className="card__body_text">City: {profile.city}</div>
                                <div className="card__body_text">Account created at: {profile.createdAt}</div>   
                            </div>
                           
                        </div>   
                   
                </div>
            )
        }) : <div>No data</div> }
        </div>

    )
}

export default Profile; 