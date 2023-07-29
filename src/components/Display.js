function Display(props) {
    const giphy = props.giphy;
  
    if (props.giphy.data) {
      return <div className="displayContatiner">
          <img src={giphy.data.images.preview_gif.url}></img>
          </div>;
    } else {
      return <h1>Search for a Movie</h1>;
    }
  }
  
  export default Display;