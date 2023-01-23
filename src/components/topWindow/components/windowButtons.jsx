//Resources
import X_icon from '../../../resources/X-icon.png';

function WindowButtons() {

    //Methods
    function closeWindow() {
        window.pngtubeProcess.close_window()
    }

    return (
        <>
            {
                /*
                <button id='minimize'>
                
            </button>
            <button id='window'>

            </button>
                */
            }
            <button id='close' onClick={() => closeWindow()}>
                <img src={X_icon} alt="Close-Window-Buttom" />
            </button>
        </>
    )
}

export default WindowButtons