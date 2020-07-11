import React,{Component} from 'react';
import axios from 'axios';

export class SearchBar extends Component {

    onChange = (e) => this.setState({question: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
    }

    componentDidUpdate() {
            axios.get("https://www.programmableweb.com/api/khan-academy-rest-api-v1?"+`${this.state.question}`)
            .then(res=> this.setState({ answers: res}));
    }
    render() {
        const {question} = this.props.searchparams;
        return(
            <form onSubmit={this.onSubmit}>
                <label htmlFor="question">
                    Question
                    <input 
                    id="question" 
                    value={question}
                    onChange = {this.onChange} 
                    placeholder="enter your question">
                    </input>    
                </label>
                <button onClick={this.getAnswers}>Submit</button>
            </form>
        )
    }
}

export default SearchBar;