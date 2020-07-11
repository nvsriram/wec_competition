import React, {Component} from 'react';

export class SearchItem extends Component {
    render() {
        return this.props.answers.map((answer)=>(
                <div key={answer.id}>
                    {answer}
                </div>
        )
        );}
}

export default SearchItem;