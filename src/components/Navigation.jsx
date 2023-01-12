import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navigation = () => {

    const [inputValue, setInputValue] = useState("")

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search', {
            state: inputValue
        })
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


  return (
    <>

        <header>
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="buscar pokemon"  value={inputValue} onChange={handleChange}/>
                <button>Buscar</button>
            </form>
        </header>
    
    </>
  )
}

export default Navigation