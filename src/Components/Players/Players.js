import React from 'react';
import "./Players.css"
const Players = (props) => {
    const {name,age,img,team,playing_role,salary}=props.player
    return (
        <div className="style">
        <img  src={img} alt="" />
         <p>Name :- {name}</p>
         <p>Age :- {age}</p>
         <p>Team :- {team}</p>
         <p>Playing_role :- {playing_role}</p>
         <p>salary :- {salary}</p>
         <button onClick={()=>props.handleEvent(props.player)}>Select for Final Team</button>
        </div>
    );
};

export default Players;