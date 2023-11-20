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