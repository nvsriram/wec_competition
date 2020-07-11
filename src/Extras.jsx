import React, {Component} from 'react';
import { Corgi } from './Corgi';

export class Extras extends Component {
    render() {
    return (
    <div>
        <p>
            Oops, guess it didn't load...
            <br />
            Here's a cute Corgi while you wait...uwu
        </p>
        <Corgi
            src="http://placecorgi.com/300/300"
            alt="Cute corgi uwu"
        /> 
    </div>
    )}      
}

export default Extras;