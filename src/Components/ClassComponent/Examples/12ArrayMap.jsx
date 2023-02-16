import React from 'react'; 
import ReactDOM from 'react-dom'; 

function ArrayAccessThrouProps(props) { 
    console.log(props);
	const list = props.menuitems; 
    // array.forEach(element => {
        
    // });
    const updatedList = list.map((i)=>{ 
        return( <li key={i}> 
                    {i} 
                </li>);  
    });   
    return( <ul>{updatedList}</ul> );
} 
const menuItems = [1,2,3,4,5]; 

function AppExample() 
{ 
	return(
			<>
				<ArrayAccessThrouProps menuitems = {menuItems} />
			</>
		);
} 

export default AppExample;