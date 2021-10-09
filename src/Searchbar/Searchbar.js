import { Component } from 'react';

class Searchbar extends Component {
     state = {
    query: '',
    };
    
  handleChange = e => {
      const { name, value } = e.target;

    this.setState({ [name]: value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            alert('Введите правильный запрос')
            return;
        }
        this.props.onSubmit(this.state.query);
    };
    
    render(){
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        name="query"
                        value={this.state.query}
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
export default Searchbar;