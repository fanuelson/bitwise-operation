import React, { useContext } from 'react';
import styles from './rowOperations.module.scss';

import { Row } from '../'
import BitwiseContext from '../../context/bitwiseContext';


function renderOperations(operations, operationSelected, clickFunc) {
    return operations.map(
        o => {
            if(o === operationSelected) {
                return <span key={o} onClick={() => { clickFunc(o) }} className={[styles.operation, styles.selected].join(' ')}>{o}</span>;
            }
            return <span key={o} onClick={() => { clickFunc(o) }} className={styles.operation}>{o}</span>;
        }
    )
}

function RowOperations({label}) {
    const bitwiseContext = useContext(BitwiseContext)
    
    function updateSelectedOperation(selected) {
        bitwiseContext.updateOperationSelected(selected);
    }

    return (
        <Row label={label} >
            <div className={styles.operations}>
                {renderOperations(bitwiseContext.operations, bitwiseContext.operationSelected, updateSelectedOperation)}
            </div>
        </Row>
    );
}

export default RowOperations;


