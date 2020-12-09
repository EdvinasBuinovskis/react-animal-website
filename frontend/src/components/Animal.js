import React from 'react'

export default function Animal(props) {
    const {animal} = props; 
    return (
        <div key={animal._id} className="card">
            <a href={`/animal/${animal._id}`}>
                <img className="medium" src={animal.image} alt={animal.name} />
            </a>
            <div className="card-body">
                <a href={`/animal/${animal._id}`}>
                    <h1>{animal.name}</h1>
                </a>
                <div>{animal.status}</div>
                <div>{animal.date}</div>
            </div>
        </div>
    )
}