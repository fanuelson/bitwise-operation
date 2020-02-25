import React from 'react';
import styles from './circle.module.scss';

function Circle({ checked, onClickCircle, index, inactive, lightgreen }) {


    function getElementClass() {
        const elementClass = [styles.circle];

        if (inactive) {
            return elementClass.concat(styles.inactive).join(' ');
        }

        if(lightgreen) {
            elementClass.push(styles.lightgreen);
        }

        if (checked) {
            elementClass.push(styles.active);
        }

        return elementClass.join(' ');
    }

    return (
        <div className={getElementClass()} onClick={() => { return onClickCircle && !inactive ? onClickCircle(index) : '' }}>
        </div>
    );
}

export default Circle;
