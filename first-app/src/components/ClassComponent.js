import React, { Component } from 'react'


export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                id: 1, firstName: "John", lastName: "Doe", age: 24,
                job: "Developer"
            },
            {
                id: 2, firstName: "Kate", lastName: "Reton", age:
                    22, job: "Chef"
            },
            {
                id: 3, firstName: "Melissa", lastName: "Lout", age:
                    41, job: "Developer"
            },
            {
                id: 4, firstName: "Ann", lastName: "Willington",
                age: 23, job: "Driver"
            },
            {
                id: 5, firstName: "Michel", lastName: "Plank", age:
                    55, job: "Developer"
            },
            {
                id: 6, firstName: "Bob", lastName: "Palanski", age:
                    32, job: "Waiter"
            },
            {
                id: 7, firstName: "Jack", lastName: "Daniels", age:
                    23, job: "Developer"
            },
            {
                id: 8, firstName: "Poul", lastName: "Torn", age:
                    65, job: "Cashier"
            },
        ];
    }
    render() {
        return (
            <div className="users_item">

                {this.state.map((item, index) => {
                    return (
                        <ol className="user_list" key={index} start={index+1}>
                            <li>
                                firstName: {item.firstName},
                                lastName: {item.lastName},
                                fullName: {item.firstName + ' ' + item.lastName},
                                age: {item.age + 5},
                                job: {item.job}
                            </li>
                        </ol>
                    )
                })}
            </div>
        )
    }
}

export default ClassComponent;

