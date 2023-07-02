import {memo} from 'react';
import FooterMessage from './FooterMessage';
import FooterLinks from './FooterLinks';

const FooterBar = () => {
    return(
        <footer>
            <FooterMessage/>
            <FooterLinks/>
        </footer>
    )
}

export default memo(FooterBar);