
// import React from "react";
// // import "./App.css"
// import EnhancedComponent from './HOC';  
// // import EnhancedComponent from './Name'
   
// class App extends React.Component {
//   render() {
//     // Call the props from originalComponent
//     return <h1>{this.props.name}</h1> 
//   }
// }
   
// // Passed the originalcomponent 
// export default EnhancedComponent(App);


import React from 'react'
import EnhancedComponent from './Hoc';
// importing HighOrder file

class App extends React.Component {
render() {
	// Destructuring the props
	const { show, handleclick } = this.props

	// Calling out the props
	return <> <button onClick={handleclick}>{show}
	</button> </>
}
}

export default EnhancedComponent(App);
