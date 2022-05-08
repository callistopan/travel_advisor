import axios from 'axios';  //import axios  to make http requests
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  
  
 export const getPlacesData = async (sw,ne) => {
    try{
        //request
        const {data:{ data }}=await axios.get(URL,
         {
    
   
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
      
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'de81a4153fmshe9870a46099f4f6p1ab890jsn9f3876c614ed'
            }
          })
        return data


    }
    catch(err){
        console.log(err)
        console.log("there is a delay")
    }

}