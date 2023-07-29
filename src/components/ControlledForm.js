import {useState} from 'react';

function ControlledForm(props) {
    //state form data
    const [formData, setFormData] = useState({})

    // create a function to handle fetching from OMDB
    const fetchGiphy = async (giphyTitle) => {
    // api key
    const apiKey = "uL97XT6Sv0WUyDt7iJcSl1yGKbCZPjmZ"
    // construct url for api call
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
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
        <form onSubmit={handleSubmit}>
            <input type='submit' value={"Click For GIPHY Magic!"}/>
        </form>
    </div>
}

export default ControlledForm;