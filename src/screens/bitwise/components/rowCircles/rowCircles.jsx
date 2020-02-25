import React from 'react';
import { Circle, Row } from '../';

function RowCircles({label, elements, onClickCircle, inactive, lightgreen}) {

    return (
        <Row label={label} >
            {elements.map((e, index) => {
                return <Circle key={index} index={index} checked={e} onClickCircle={onClickCircle} inactive={inactive} lightgreen={lightgreen} ></Circle>
            })}
            
        </Row>
    );
}

export default RowCircles;


