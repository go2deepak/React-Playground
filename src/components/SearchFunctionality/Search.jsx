import React, {useState} from 'react'

const Search = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(item => setData(item))
    }
    
  return (
    <div>
        {data.filter((item) => item.title.includes(text)).map((item) => <li>{item.title}</li>)}
        <input  type='text' placeholder='Enter name' value={text} onChange={handleChange}/>
    </div>
  )
}

export default Search