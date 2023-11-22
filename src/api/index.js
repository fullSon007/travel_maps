import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const {data: {data} } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat ,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'c8ca6f2783msh59122dc17cd8613p134cd7jsn5fa077288800',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }

        });

        
   return data;

    } catch (error){
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get('https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028', {
      params: {lon: 'lng', lat: 'lat',},
      headers: {
        'X-RapidAPI-Key': 'c8ca6f2783msh59122dc17cd8613p134cd7jsn5fa077288800',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    });

    return data;
  } catch (error){
    console.log(error)
}

}