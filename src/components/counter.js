import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rndm}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={rndm} className="btn btn-primary">RNDM</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}


export default connect(mapStateToProps, actions)(Counter);