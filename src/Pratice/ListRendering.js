import React from 'react'
import List2 from './ListRender2'



function ListRendering() {
    const persons = [

        {
            id: 1,
            name: 'Tiger',
            age: '20',
            skill:'hunting'
        },

        {
            id: 1,
            name: 'Teja',
            age: '26',
            skill:'Software Developer'
        },
        {
            id: 3,
            name: 'Kid of Tiger',
            age: '10',
            skill:'Hunting and Eating'
        }

    ]
    const personList = persons.map(per => <List2 per={per} />)
    
    return (
        <div>

            <h1>Hello Guys{personList}</h1>
        </div>
    )
}

export default ListRendering
