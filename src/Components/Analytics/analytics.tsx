import "./analytics.scss";
import wand from "../images/magic-wand.png";
import React, { useState } from "react";
import { shortenUrl } from "./bitlyService";
import QRCode from 'qrcode.react';

//Access token: 44ec1badb674cf7364e1317ab3db5884d4a9d397

function Analytics() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [selectedOption, setSelectedOption] = useState('shorten_url');
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleShortenUrl = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const shortenedUrl = await shortenUrl(longUrl);
            setShortUrl(shortenedUrl);
            console.log(shortenedUrl)

        } catch (error) {
            console.error('URL shortening error:', error);
            // Handle error gracefully
        } 
        setIsButtonClicked(true);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const getButtonText = () => {
        if (selectedOption === 'qr_code') {
            return 'Generate QR Code';
        } else {
            return 'Shorten Url';
        }
    };

    return (
        <div className="analytics__container" id="analytics">
            <form onSubmit={handleShortenUrl}>
                <div>
                    <input type="text" placeholder="Paste URL here..." value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)} required />
                    <div>
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="shorten_url">Shorten Url</option>
                            <option value="qr_code">QR code generation</option>
                            <option disabled>Custom Domain</option>
                        </select>
                        <input type="text" placeholder="Type Alias here" readOnly />
                    </div>

                    <button type="submit">
                        {getButtonText()}
                        <img src={wand} alt="trim URL" width="24px" />
                    </button>

                    {/* {isButtonClicked && <p>Shortened URL: {shortUrl}</p>} */}
                    {/* <input type="text" placeholder="Shortened url: " value={`Shortened url: ${shortUrl}`} />
                    <QRCode value={longUrl} /> */}

                    {isButtonClicked && (
                        <div>
                            {selectedOption === 'qr_code' ? (
                                <QRCode value={longUrl} fgColor="#133568"/>
                            ) : (
                                <p>Shortened URL: {shortUrl}</p>
                            )}
                        </div>
                    )}


                </div>

                <p>By clicking TrimURL, I agree to the <a href="/">Terms of Service,</a> <a href="/">Privacy Policy</a> and Use of Cookies.</p>
            </form >
        </div>


    );
}

export default Analytics;