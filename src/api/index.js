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
              'X-RapidAPI-Key': '09f40f4d06msh434d3215bde471ap1b3570jsne891da6f0dff'
            }
          })
        return data


    }
    catch(err){
        console.log(err)
    }

}