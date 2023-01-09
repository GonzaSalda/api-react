import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navigation = () => {

    const initialForm = {
        name:''
    }
    const [formState, setFormState] = useState(initialForm)

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search', {
            state: formState.name
        })
    }

    const handleChange = (e) => {
        setFormState({...formState, 
        [e.target.name]:e.target.value})
    }


  return (
    <>

        <header>
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="buscar pokemon" name='name' value={formState.name} onChange={handleChange}/>
                <button>Buscar</button>
            </form>
        </header>
    
    </>
  )
}

export default Navigation