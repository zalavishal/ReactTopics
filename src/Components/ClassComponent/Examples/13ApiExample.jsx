// import React, { Component } from 'react';

// class ApiExample extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             FetchData : {}
//         }
//         fetch("https://jsonplaceholder.typicode.com/todos").then(resp => resp.json()).then((result)=>{this.setState({FetchData:result})})
//     }

//     render() {
//         return (
//            <>

//            </>
//         );
//     }
// }

// export default ApiExample;

import React, { Component, useEffect, useState } from 'react';

function ApiExample() {
    const [vishal, setUser] = useState([]);
    const [Photodata, photoapi] = useState([]);

    const data = () => {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(result => setUser(result))
    }
    const Photo = () => {
        return fetch(
            "https://picsum.photos/v2/list?page=2&limit=100",
            // "https://picsum.photos/v2/list"
            )
            .then(res => res.json())
            .then(result => photoapi(result))
    }
    useEffect(() => {
        data();
        Photo();
    })
    return (
        <>
            <h1 className="text-center">User List</h1>
            <table className="table text-center table-bordered table-hover">
                <thead className="thead-dark">
                    <tr >
                        <th scope="col">UserId</th>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {vishal.map((userObj, index) => (
                        <tr className="table-primary" key={index}>
                            <td>{userObj.userId}</td>
                            <td>{userObj.id}</td>
                            <td>{userObj.title}</td>
                            {/* <td>{userObj.completed}</td> */}
                            <td><input type="checkbox" checked={userObj.completed}></input></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='grid'>
                {Photodata.map((userObj, index) => (
                  <div>
                    <img className='img_w' src={userObj.download_url} alt="" />
                    <div className="tir">{userObj.author}</div>
                  </div>
                ))}
            </div>
        </>
    )
}

export default ApiExample;
