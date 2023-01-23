//Resources
import X_icon from '../../../resources/X-icon.png';
import H_icon from '../../../resources/H-icon.png';
import __icon from '../../../resources/_-icon.png';

function WindowButtons() {

    //Methods
    function closeWindow(param) {
        window.pngtubeProcess.EventWindow(param)
    }

    return (
        <>
            <button className='tolltip_bar_buttons' id='minimize' onClick={() => closeWindow('minimize')}>
                <img src={__icon} alt="Close-Window-Buttom" width={50} height={50} />
            </button>
            <button className='tolltip_bar_buttons' id='window' onClick={() => closeWindow('window')}>
                <img src={H_icon} alt="Close-Window-Buttom" width={50} height={50} />
            </button>
            <button className='tolltip_bar_buttons' id='close' onClick={() => closeWindow('close')}>
                <img src={X_icon} alt="Close-Window-Buttom" width={50} height={50} />
            </button>
        </>
    )
}

export default WindowButtons