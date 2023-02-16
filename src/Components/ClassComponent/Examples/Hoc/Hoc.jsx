// import React from 'react'
  
// const EnhancedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component {
  
//         // Logic here
  
//         render() {
//             // Pass the callable props to Original component
//             return <OriginalComponent name="GeeksforGeeks"  /> 
//         }
//     }
//     // Returns the new component
//     return NewComponent
// }
  
// export default EnhancedComponent;


import React from 'react'

const EnhancedComponent = (OriginalComponent) => {
	class NewComponent extends React.Component {

		constructor(props) {
			super(props);
			// Set initial count to be 0
			this.state = { count: 0 };
		}

		handleClick = () => {
			// Incrementing the count
			this.setState({ count: this.state.count + 1});
		}

		render() {

			// passed a handleclick and count in the originalComponent
			// as a props for calling and adding the functionality
			return <OriginalComponent
				handleclick={this.handleClick}
				show={this.state.count} />
		}
	}
	// Returns the new component
	return NewComponent
}
// Export main Component
export default EnhancedComponent
