import React, {useState} from 'react'

//COMPONENTES
import WeatherForm from "../../Components/Home/Form/weatherForm"
import CiudadInfo from "../../Components/Home/City/Ciudadinfo"
import Loader from "../../Components/Custom/Loader/Loader"
import Header from '../../Components/Home/Header/Header'
import Error from '../../Components/Custom/Loader/Error'

const Home = () => {
    //STATE
    const [infCity , setInfCity]= useState(null);
    const [latitud , setLatitud]= useState("");
    const [longitud , setLongitud]= useState("");
    const [loader , setLoader]= useState(false);

    //FUNCIONES
    const Latitud = ({value}) =>{
        setLatitud(value) //Se le asigna el objeto Event.target.value
    }
    const Longitud= ({value}) =>{
        setLongitud(value) //Se le asigna el objeto Event.target.value
    }

    const enviarCordenadas = async (e) =>{
        e.preventDefault();
        //Aqui ponemos el load cuando hace la peticion y lo reseteamos
        setInfCity(null);
        setLoader(true);
        //Llmamos a la api aqui porque lo necesitamos justo enviamos submit
        const API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=ea0aca3ad917aeb0e53b691ff004380d`
        const response = await fetch (API);
        const result = await response.json();
        setInfCity(result); 
        setLoader(false);
    }
    console.log(infCity)

    return (
        <div className="">
            <Header/>
            <WeatherForm 
            Latitud={Latitud}
            Longitud={Longitud}
            enviarCordenadas={enviarCordenadas}/>
           
            {
                loader ? <Loader/> : null
            }

            {
				infCity? infCity.cod !== 200? 
					<Error 
						error={infCity.cod} 
						mensaje={infCity.message} 
					/> : 
					<CiudadInfo
						name={infCity.name} 
						weather={infCity.weather[0].description} 
						img={infCity.weather[0].icon}
						temp={infCity.main.temp}
					/> : null 
			}
            
        </div>
    )
}

export default Home
