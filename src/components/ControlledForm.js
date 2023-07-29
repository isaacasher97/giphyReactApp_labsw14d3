import {useState} from 'react';

function ControlledForm(props) {
    //state form data
    const [formData, setFormData] = useState({
        giphyTitle: ""
    })

    //handleChange function for the form // this is step 3 only after pkacing the input with the name property in the returned JSX
    const handleChange = (event) => {
        //create a copy of the current state
        const newState = {...formData}
        // then you modify the copy dynamically, in case multiple inputs in your form(which there usually are)
        newState[event.target.name] = event.target.value
        //update the state
        setFormData(newState) 
    }


    // create a function to handle fetching from OMDB
    const fetchGiphy = async (giphyTitle) => {
    // api key
    const apiKey = "uL97XT6Sv0WUyDt7iJcSl1yGKbCZPjmZ"
    // construct url for api call
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${giphyTitle}`
    // make api call
    const response = await fetch(url)
    // convert response into javascript object
    const data = await response.json()
    // update the state
    props.setGiphy(data)
    }

    // create a function to handle the submission of the form
    const handleSubmit = (event) => {
        event.preventDefault()
        // call fetchMovie
        fetchGiphy(formData.giphyTitle)
        // clear the form
        setFormData({giphyTitle: ""})
    }
    


    return <div>
        <h3>Generate A Random GIF!</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' name='giphyTitle' value={formData.giphyTitle} onChange={handleChange} placeholder='Enter a Name Or Keyword'/>
            <input type='submit' value={"Click For GIPHY Magic!"}/>
        </form>
    </div>
}

export default ControlledForm;