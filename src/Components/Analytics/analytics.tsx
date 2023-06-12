import "./analytics.scss"
import wand from "../images/magic-wand.png"

function Analytics() {
    return (
        <div className="analytics__container">
            <form>
                <div>
                    <input type="text" placeholder="Paste URL here..." />
                    <div>
                        <select>
                            <option>Custom Domain</option>
                            <option>Custom Domain</option>
                            <option>Custom Domain</option>
                            <option>Custom Domain</option>
                            <option>Custom Domain</option>
                        </select>
                        <input type="text" placeholder="Type Alias here" />
                    </div>

                    <button type="submit">
                        Trim URL
                        <img src={wand} alt="trim URL"  width="24px"/>
                    </button>


                </div>

                <p>By clicking TrimURL, I agree to the <a>Terms of Service,</a> <a>Privacy Policy</a> and Use of Cookies.</p>
            </form ></div>


    );
}

export default Analytics;