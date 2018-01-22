import React, {Component} from 'react';

/*
    SearchBar extends Component - 
        remember this is the ES6 way of creating a class
        this is essentialy the same as creating a SearchBar object and setting its __proto__ to be that of React.Component
    constructor(props) - props(short for properties) are IMMUTABLE data passed into you component and is inherited from Component. DONT CHANGE THEM!!!
        super is the same as doing .apply(this,arguments) to the super class of our new object subclass.
        the constructor function initializes the state of an object instance, as well as its variables.
    this.state = {}
        The object we pass into the this.state object will contain the properites of our class that we want to TRACK through our states
        in this case, {term: ''} is abitrary, it is  a PROP  we defined referencing the search term the user enters into the search bar. 
        Whenever this.setState() method is called our class object and all its children will re-render, with the updated state information
        this allows for us to process user input and other things and have them display in real time.
    value = {this.state.term} this creates a controlled componant( or form) this means that the value of the form(input) will only change when the value of state changes. You want the form to be dependant on the states value when it re-renders, not its own value (which may be the same but it is an important distinction)** You always want the state to dictate how the componant will update upon a re-render, the state is in control
*/
class SearchBar extends Component  { 
    constructor(props){
        super(props);//initialize all the passed in values by calling The Component classes constructor method
        this.state = { term: ''}; //you never directly manipulate state with an equals sign outside of the constuctor, instead use setState()
    }
    render(){ //this render method will be called every time a change event occurs calling our SearchBar.setState() method
        return (
            <div className ="search-bar">
                <input type ="text" 
                    className= 'search-bar__input input is-rounded is-small' 
                    placeholder ="Search Youtube..."
                    value = {this.state.term} //this value will only change when the state changes, which happens upon rerender by this.SetState 
                    onChange ={ (event) => this.setState({term:event.target.value}) } //take change event and update our state with the input text
                />
            </div>
        );
    }
    
}

export default SearchBar;