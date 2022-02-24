import axios from "axios";

export const baseURL="https://bayut.p.rapidapi.com"

export const fetchAPI=async (url)=>{
    const {data}=await axios.get(url,{
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'b39e63fe90mshca444908e802dbbp1f01a6jsn1ecf001c4fd6'
  }
    })
    return data;
}

