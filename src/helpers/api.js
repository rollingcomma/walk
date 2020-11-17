// import axios from 'axios';

export const getGeocode = (addr) => {
  const apiUrl = "https://us1.locationiq.com/v1/search.php?key=pk.f33bfa71b3e78e593c9393e89be850bd&format=json&q="
  const urlEncodedAddr = encodeURIComponent(addr);
  return fetch(`${apiUrl}${urlEncodedAddr}`)
         .then(res => res.json())
         .then(result =>{
           const data = JSON.parse(result);
           console.log("coords", data);
           return {"lat":data[0].lat, "lon":data[0].lon}; 
         })
         .catch(err => {
           console.log("Error convert address to coordinate", err);
         })
}