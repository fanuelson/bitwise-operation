import React from 'react';
import styles from './bitwise.module.scss';
import { RowCircles, RowOperations } from './components';
import BitwiseContext from './context/bitwiseContext';
import BitwiseProviderWrapper from './context/contextWrapper';


function Bitwise() {

  return (
    <BitwiseProviderWrapper>
      <BitwiseContext.Consumer>
        { bitwiseContext => 
        
          <div className={styles.bitwise}  >
            <RowCircles label='Input 1' elements={bitwiseContext.input1} onClickCircle={bitwiseContext.clickInput1} ></RowCircles>
            <RowCircles label='Input 2' elements={bitwiseContext.input2} onClickCircle={bitwiseContext.clickInput2} inactive={bitwiseContext.input2Disabled}></RowCircles>
            <RowOperations label='Operations' ></RowOperations>
            <RowCircles label='Result' elements={bitwiseContext.result} lightgreen={true} ></RowCircles>
          </div>
        }
      </BitwiseContext.Consumer>
    </BitwiseProviderWrapper>
  );
}

export default Bitwise;
