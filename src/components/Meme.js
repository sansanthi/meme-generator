import React from "react";
import memeDta from "../memeData.js";

function Meme() {
    let imageUrl;
    function generateMemeImage() {
        let memeArrays = memeDta.data.memes;
        // console.log(memeArrays)
        let randomNumber = Math.floor(Math.random() * memeArrays.length);
        imageUrl = memeArrays[randomNumber].url;
        console.log(imageUrl)
    }
    return (
        <main>
            <p>{imageUrl}</p>
            <div className="form">
                <input type="text" id="firstText" placeholder="Top text"/>
                <input type="text" id="secondText" placeholder="bottom text" />
                <button type="submit" className="submit-btn" onClick={generateMemeImage}>Get a new meme image</button>
            </div>
        </main>
    )
}

export default Meme;