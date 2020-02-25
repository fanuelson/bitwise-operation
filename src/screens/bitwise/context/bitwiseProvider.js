import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BitwiseContext from './bitwiseContext'

function removeFavoriteMovie(newState, movieIndex) {
    newState.ids.splice(movieIndex, 1);
    newState.movies.splice(movieIndex, 1);
}

function addFavoriteMovie(newState, movie) {
    newState.ids.push(movie.id);
    newState.movies.push(movie);
}

const initialState = {
    input1: [true, true, true, false, true, false , true , false , true , false , true , true ,true],
    input2: [false, false, false, false, true, true , true , true , true , false , true , false ,true],
    result: [false, true],
    operationSelected: 'AND',
    operations: ['AND', 'OR', 'XOR', 'NOT']
}

const BitwiseProvider = ({ children }) => {
    const [input1, setInput1] = useState(initialState.input1);
    const [input2, setInput2] = useState(initialState.input2);
    const [operations, setOperations] = useState(initialState.operations);
    const [operationSelected, setOperationSelected] = useState(initialState.operationSelected);
    const [result, setResult] = useState(initialState.result);
    const [input2Disabled, setInput2Disabled] = useState(false);

    const updateOperationSelected = (selectedElement) => {
        setOperationSelected(selectedElement);
        if(selectedElement === 'NOT') {
            setInput2Disabled(true);
        }else{
            setInput2Disabled(false);
        }
    }

    const clickInput1 = (index) => {
        let newInput1 = [...input1];
        newInput1[index] = !newInput1[index];
        setInput1(newInput1)
    }

    const clickInput2 = (index) => {
        let newInput2 = [...input2];
        newInput2[index] = !newInput2[index];
        setInput2(newInput2)
    }

    const executeOrOperation = () => {
        let newResult = [];
        for(let i = 0 ; i < input1.length; i++ ) {
            const element1 = input1[i];
            const element2 = input2[i];

            newResult.push(element1 || element2);
        }

        setResult(newResult);
    }

    const executeAndOperation = () => {
        let newResult = [];
        for(let i = 0 ; i < input1.length; i++ ) {
            const element1 = input1[i];
            const element2 = input2[i];

            newResult.push(element1 && element2);
        }

        setResult(newResult);
    }

    const executeXorOperation = () => {
        let newResult = [];
        for(let i = 0 ; i < input1.length; i++ ) {
            const element1 = input1[i];
            const element2 = input2[i];

            newResult.push(element1 ^ element2);
        }

        setResult(newResult);
    }

    const executeNotOperation = () => {
        let newResult = [];
        for(let i = 0 ; i < input1.length; i++ ) {
            const element1 = input1[i];

            newResult.push(!element1);
        }

        setResult(newResult);
    }

    const mapOperation = {
        "AND": executeAndOperation,
        "OR": executeOrOperation,
        "XOR": executeXorOperation,
        "NOT": executeNotOperation,
    }

    useEffect(() => {
        mapOperation[operationSelected]();
    }, [input1, input2, operationSelected]);

    return (
        <BitwiseContext.Provider
            value={{
                input1,
                input2,
                operations,
                operationSelected,
                updateOperationSelected,
                result,
                clickInput1,
                clickInput2,
                input2Disabled
            }}
        >
            {children}
        </BitwiseContext.Provider>
    )
}

BitwiseProvider.propTypes = {
    children: PropTypes.any
}

export default BitwiseProvider