import React from 'react'


/* 1 way of passing data calling parent to child {
function ListRender2({props}) {
    return (
        <div>
             {
                <h3>{props.per.name} and age is {props.per.age} skill is {props.per.skill}</h3>
            }
        </div>
    )
} */


function ListRender2({per}) {
    return (
        <div>
             {
                <h3>{per.name} and age is {per.age} id is {per.id}</h3>
            }
        </div>
    )
} 
export default ListRender2
