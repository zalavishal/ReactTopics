import React, { Component } from 'react';

class controlledcompo extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", FormData: { "temp": "data" } }
    }

    submitdata = (event) => {
        event.preventDefault()
    }
    storeStateData = (event) => {
        // console.log("called",event.target.value);
        this.setState({ username: event.target.value })
    }
    storeDatatoStateObject = (event) => {
        // this.setState({FormData:event})
        this.setState(prevState => ({
            FormData: { ...prevState.data, [event.target.name]: event.target.value }
        }))
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>
                                In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                            </p>
                            <p>
                                We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                            </p>

                            <p>
                                For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                            </p>


                            <h3>set data to state with function</h3>

                            <form>
                                {JSON.stringify(this.state)}
                                <input type="text" onChange={this.storeStateData} name="username" id="username" />
                                <input type="submit" onClick={this.submitdata} />
                            </form>


                            <h3>set data to state inside input arrow</h3>

                            <form>
                                {JSON.stringify(this.state)}
                                <input type="text" onChange={(event) => { this.setState({ username: event.target.value }) }} name="username" id="username" />
                                <input type="submit" onClick={this.submitdata} />
                            </form>


                            <h3>set multiple data to single state object inside input arrow</h3>

                            <form>
                                {/* {JSON.stringify(this.state)}*/}
                                {JSON.stringify(this.state.FormData)}
                                {/* <input type="text" onChange={this.storeDatatoStateObject} name="uname" id="uname" /> */}
    
                                <input type="text" onChange={(event) => { this.setState((prevState) => ({ FormData: { ...prevState.FormData, [event.target.name]: event.target.value } })) }} name="uname" id="uname" />

                                <input type="text" onChange={(event) => { this.setState(koibhi => ({ FormData: { ...koibhi.FormData, [event.target.name]: event.target.value } })) }} name="password" id="password" />
                                {/* <input type="text" onChange={(event)=>{ this.setState({...this.state.formData,[event.target.name]:event.target.value})  }} name="uname" id="uname" /> */}
                                {/* <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="username" id="username" />
                                  <input type="text" onChange={(event)=>{ this.setState({[event.target.name]:event.target.value})}} name="password" id="password" /> */}
                                <input type="submit" onClick={this.submitdata} name="" id="" />
                                <br />
                                <br />
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default controlledcompo;