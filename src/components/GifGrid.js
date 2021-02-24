import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    
    //const [count, setCount] = useState(0)
    //const [images, setImages] = useState([])

    const {data: images, loading}= useFetchGifs(category);

    /*useEffect ( () => {
        getGifs(category)
            .then( setImages );
    }, [category]) //indica que quiero que se ejecute una sola vez, cuadno el componente se renderiza (si está vacio)
    */

    //getGifs(); prueba
    
    return (
        <>
            <h4 className= "categoria animate__backInDown">Resultado para: {category}</h4>
            {loading && <p>Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map ( img=> 
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
