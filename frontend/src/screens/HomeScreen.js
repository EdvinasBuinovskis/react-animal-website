import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Animal from '../components/Animal';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                setLoading(true);
                const { data } = await axios.get('/api/animals');
                setLoading(false);
                setAnimals(data);
            }catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {loading? (<LoadingBox></LoadingBox>) :
                error? (<MessageBox variant="danger">{error}</MessageBox>) :
                (
                <div className="row center">
                    {animals.map(animal => (
                        <Animal key={animal._id} animal={animal}></Animal>
                    ))}
                </div>
            )}
        </div>
    );
}