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
            <div className="header"><h2>GifExpertApp</h2></div>
            <CategoryAdd setCategories= {setCategories}/>
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
