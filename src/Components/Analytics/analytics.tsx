import "./analytics.scss";
import wand from "../images/magic-wand.png";
import React, { useState, useRef } from "react";
import { shortenUrl } from "./bitlyService";
import QRCode from 'qrcode.react'
import { toPng } from 'html-to-image';



function Analytics() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [selectedOption, setSelectedOption] = useState('shorten_url');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [exportButton, SetExportButton] = useState(false)


    const qrCodeRef = useRef<HTMLDivElement>(null);


    const handleShortenUrl = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const shortenedUrl = await shortenUrl(longUrl);
            setShortUrl(shortenedUrl);

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
            // SetExportButton(true);
            return 'Generate QR Code';
        } else {
            // SetExportButton(false);
            return 'Shorten Url';
        }
    };

    const getExportButton = () => {
        if (selectedOption === 'qr_code') {
            SetExportButton(true);
        } else {
            SetExportButton(false);
        }
    };

    const exportQRCode = () => {
        if (qrCodeRef.current) {
            const exportOptions = {
                style: {
                    transform: 'scale(2)', // Increase scale for higher resolution
                    transformOrigin: 'top left',
                },
                width: qrCodeRef.current.offsetWidth * 2, // Double the width for higher resolution
                height: qrCodeRef.current.offsetHeight * 2, // Double the height for higher resolution
                quality: 1, // Set the image quality to the maximum
                pixelRatio: 2, // Increase pixel density for higher resolution
            };

            toPng(qrCodeRef.current, exportOptions)
                .then(function (dataUrl) {
                    // Create a temporary link element
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'qrcode.png';
                    // Trigger the download
                    link.click();
                })
                .catch(function (error) {
                    // Handle errors
                    console.error('QR code export error:', error);
                });
        }
    };


    return (
        <div className="analytics__container" id="analytics">
            <form onSubmit={handleShortenUrl}>
                <div>
                    <input type="text" placeholder="Paste URL here..." value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        required />
                    <div>
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="shorten_url">Shorten Url</option>
                            <option value="qr_code">QR code generation</option>
                            <option disabled>Custom Domain</option>
                        </select>
                        <input type="text" placeholder="Type Alias here" readOnly />
                    </div>

                    <button type="submit"
                        onClick={getExportButton}
                    >
                        {getButtonText()}
                        <img src={wand} alt="trim URL" width="24px" />
                    </button>

                    {isButtonClicked && (
                        <div>
                            {selectedOption === 'qr_code' ? (
                                <div ref={qrCodeRef}>
                                    <QRCode value={longUrl} fgColor="#000000" />
                                </div>

                            ) : (
                                <p>Shortened URL: {shortUrl}</p>
                            )}
                        </div>
                    )}


                </div>

                <p>By clicking TrimURL, I agree to the <a href="/">Terms of Service,</a> <a href="/">Privacy Policy</a> and Use of Cookies.</p>
                {exportButton && <button onClick={exportQRCode}>Export QRCode</button>}
            </form >
        </div>


    );
}

export default Analytics;