//Components
import WindowButtons from "./components/windowButtons";
import SettingsButton from "./components/settingsButton";

//Css
import '../Styles/topWindow.css'

export default function TopWindow() {
    return (
        <div id="topBar">
            <div id="tolls">
                <SettingsButton/>
            </div>
            <header id='topWindowTollbar'>
                <h3>PNGTube Studio</h3>
            </header>
            <div id="buttons">
                <WindowButtons/>
            </div>
        </div>
    )
}
