import React from 'react'

//Estilos
import "./weatherForm.styles.css";


const weatherForm = ({Longitud,Latitud,enviarCordenadas}) => {
    return (
        <form action="" onSubmit={(e) => enviarCordenadas(e)}>
            <input type="text" 
            placeholder="Latitud" 
            onChange={({target}) => Latitud (target)}/>
            <input type="text" 
            placeholder="Longitud" 
            onChange={({target}) => Longitud (target)}/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default weatherForm
