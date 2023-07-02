import {useState} from 'react';
import {useHover, useInteractions, useFloating, offset, shift} from '@floating-ui/react';
import Image from 'next/image';
import styles from '../../styles/companyQuotes/RightArrowButton.module.css'

export default function RightArrowButton({slideToRight, stopSliding}){
    const [isOpen, setIsOpen] = useState(false);
 
    const {refs, floatingStyles, context} = useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [offset(-75), shift({padding: 70})]
    });

    const hover = useHover(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        hover,
      ]);

    return(
        <>
            <button className={styles.right} onMouseDown={slideToRight} onMouseUp={stopSliding} ref={refs.setReference} {...getReferenceProps()}>
                <Image src={'/icons/icon-right-arrow.svg'}
                    width='0' height='0'
                    alt='left icon'
                    className={styles.arrowIcon}/>
            </button>
            {isOpen ? 
                <div ref={refs.setFloating} className={styles.tooltip} style={floatingStyles} {...getFloatingProps()}>
                    Hold down to slide!
                    <span className={styles.triangle}></span>
                </div> : <></>}       
        </>

    )
}