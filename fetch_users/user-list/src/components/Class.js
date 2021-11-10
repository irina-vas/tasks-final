import React, {Component} from 'react';
import UserContext from './Context';
import './Class.css'


class Class extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <UserContext.Consumer>
                        {(context) => {
                            console.log('context', context.users)

                            return context.users.map((item => {
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
                            }))

                        }}

                    </UserContext.Consumer>
                </div>
                {/*<button>GET INFORMATION</button>*/}
            </div>
        );
    }
}

export default Class;