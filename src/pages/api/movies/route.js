import axios from "axios";
import { NextResponse } from "next/server";

export default async function Get(req) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  };
  
  //const data = await axios('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  /*.then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));*/

  return data;
}
