import React, { Fragment } from 'react';
import './style.css'
const List = (props) => {
const {people} = props
const person = people.map((item) => {
	return(
        <div className='list'>
            <img src={item.image}></img>
            <div>
                <h1 key={item.id}>{item.name}</h1>
                <p>age:{item.age}</p> 
            </div>
         </div>
        ) 
    })
return (
   <Fragment>
       {person}
   </Fragment> 

  )
};

export default List;
