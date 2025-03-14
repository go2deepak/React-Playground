import React, {useState, useEffect} from 'react'

const UseFetch = (url) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data,setData] = useState([])
    useEffect(() =>{
        const myfetch = async() => {
            setLoading(true)
            try {
                const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
                    if(!response.ok){
                        throw new Error('Error')
                    }
                const result  = await response.json()
                setData(result)
            } catch(err) {
                setError(err)
            } finally{
                setLoading(false)
            }
        }
        myfetch()
    }, [url])
  return  { data, loading, error}
}

export default UseFetch

// import React, { useEffect, useState } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (err) {
//         setError(err);
//         console.error('Error fetching data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]); // Re-fetch when the URL changes

//   return { data, loading, error };
// };

// export default useFetch;