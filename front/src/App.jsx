import { useState } from "react";
import "./App.css";
import generateCaption from "./models/api";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [imageUrl, setImageUrl] = useState(inputValue);
    const [caption, setCaption] = useState("This is a caption below the image");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    async function handleButtonClick() {
        setImageUrl(inputValue);
        setCaption("Generating caption..."); // Show loading message while generating caption
        const caption = await generateCaption(inputValue); // Generate caption based on the input URL
        setCaption(caption); // Update the caption based on the generated caption
    }

    return (
        <div className="container">
            <h1 className="title">Caption Generator</h1>
            <input
                type="text"
                placeholder="Enter image URL"
                className="url-input"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className="submit-button" onClick={handleButtonClick}>
                Show Image
            </button>
            <div className="image-section">
                <img src={imageUrl} alt="Dynamic" className="center-image" />
                <p className="caption">{caption}</p> {/* Dynamic caption */}
            </div>
        </div>
    );
}

export default App;
