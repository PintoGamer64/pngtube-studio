//Resources
import Settings from '../../../resources/Settings.png';

export default function SettingsButton() {
    return (
        <>
            <button className='tolltip_bar_buttons' id='minimize' onClick={() => console.log('Settings Button Press')}>
                <img src={Settings} alt="Close-Window-Buttom" width={30} height={30} />
            </button>
        </>
    )
}