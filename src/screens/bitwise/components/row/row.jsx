import React from 'react';
import styles from './row.module.scss';

function Row({label, children}) {
    return (
        <div className={styles.row}>
            <p className={styles.label}>{label}</p>
            <div className="byte">
                {children}
            </div>
        </div>
    );
}

export default Row;


