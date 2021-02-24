import React, {useState} from 'react'
import {CategoryAdd} from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    
    //const categories = ['Futbol', 'Cine'];
    const [categories, setCategories] = useState(['Futbol']);

    // const handleAdd =(e) => {
    //     //setCategories(categories.concat('Cocina'));
    //     setCategories(cats => [...cats, 'Cocina']);
    // }

    return (
            
        <>    
            <div className="header">
                <h2>GifExpertApp</h2>
                <p className="autor">Gabriel Pacheco</p>
            </div>
            <CategoryAdd setCategories= {setCategories}/>
            <p className="busqueda">Presiona "Enter" para buscar</p>
            <hr />
            
            <ol>
                {
                    categories.map ( category=> 
                        <GifGrid 
                        key={category}
                        category={category} />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
