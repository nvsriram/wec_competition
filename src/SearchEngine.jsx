import React, {Component} from 'react';
import SearchItem from './SearchItem';
// import {Route} from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios';

class SearchEngine extends Component {

    render() {
        return this.props.searchparams.map((searchparam) => (
            <div key="">
                <SearchItem question={searchparam.question} answers={searchparam.answers}/>
            </div>
        ));
    }
}
export default SearchEngine;