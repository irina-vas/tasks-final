import React, {useState, useContext} from 'react';
import ContextUsers from './ContextUsers';
import  './Functional.css'


function Functional(props) {
    const users = useContext(ContextUsers)
    return (
        <div className="wrapper">
            {users.map((item, index) => {
                return (
                    <div className="card">
                      <h2 className="name">{item.name}</h2>
                      <p className="userName">user name: {item.username}</p>
                      <div className="adress">adress:
                        <span className="city">{' ' +item.address.city}, </span>
                        <span className="suite">{item.address.suite}</span>
                      </div>
                      <p className="company">working in {item.company.name}</p>
                      <div className="contacts">
                        <span>contacts: </span>
                        <span>{item.email}, </span>
                        <span>{item.phone}</span>
                      </div>
                    </div>
                )
            })}
        </div>

    );
}

export default Functional;