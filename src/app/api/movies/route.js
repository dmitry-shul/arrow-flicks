import { NextResponse } from 'next/server'
 
export async function GET(req) {

  const url = new URL(req.url)
  const params = url.search

  let data = {}

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`
    },
  };
  
  await fetch(`https://api.themoviedb.org/3/discover/movie${params}`, options)
    .then(response => response.json())
    .then(response => data = response)
    .catch(err => console.error(err));

  return NextResponse.json({
    res: data,
    params
  })
}