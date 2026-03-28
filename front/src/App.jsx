import { useState } from "react";
import "./App.css";
import generateCaption, { translate } from "./models/api";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [imageUrl, setImageUrl] = useState(inputValue);
    const [caption, setCaption] = useState("This is a caption below the image");
    const [captionPTBR, setCaptionPTBR] = useState("legenda ptbr");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    async function handleButtonClick() {
        setImageUrl(inputValue);
        setCaption("Generating caption...");
        const caption = await generateCaption(inputValue);
        setCaption(caption);

        const captionPTBR = await translate(caption);
        setCaptionPTBR(captionPTBR);
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
                <p className="caption">{caption}</p>
                <p className="caption">{captionPTBR}</p>
            </div>
        </div>
    );
}

export default App;
