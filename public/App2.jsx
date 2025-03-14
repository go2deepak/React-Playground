import React, { useEffect, useState } from 'react'

const App2 = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState()
  const fetchResults =  async() =>{
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')
      const result = await response.json()
      setData((prev) => [...prev, ...result])

    } catch(err) {
      console.log(err);
      
    }
    setLoading(false)
    
  }

  const handleScroll = () =>{
    if(window.ReportBody.scrollHeight - 300 < window.scrollY + window.innerHeight){
      setLoading(true)
    }
  }
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() =>{
    if(loading){
      setPage((prev) => prev + 1)
    }
  }, [loading])
  useEffect(() =>{
    fetchResults()
  },[page])
  return (
    <div>
      <h1>INfinte</h1>

    {data.map((item) => <li> { item.name}</li>)}

    {loading && <p>Loading...</p>}
    </div>
  )
}

export default App2

