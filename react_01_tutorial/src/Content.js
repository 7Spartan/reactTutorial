import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState('Deepak');
    const [count, setCount] = useState(0);
    // useState(0) implies the default value of count is 0
    // Use them as const so that only the react state can change the values

    const handleNameChange = () => {
        const names = ['Bob',"Alen",'Kevin'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = (count) =>{
        console.log(count+1);
        setCount(count+1);
    }

    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
    }

    const handleClick3 = (e) =>{
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onClick={handleClick}>
                Hello {name}!
            </p>

            <button onClick={handleNameChange}>Change name</button>
            <button onClick={() => handleClick(count)}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content