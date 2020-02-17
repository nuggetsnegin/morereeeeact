import React, { Component } from 'react';
import { getFunName } from '../helpers';
//every component we have will be its own class
//needs atleast 1 method inside of it - rendder: what dom elements do I put on the page?
class StorePicker extends Component {
  constructor() {
    //runs before storePicker is created
    super(); //must be created first before you can run anything in component
    this.goToStore = this.goToStore.bind(this); //overwrites the method on it and then reference this as goToStor as storePicker instance
  }
  myInput = React.createRef();
  goToStore(event) {
    //event object is full of information of what 'event' happened
    event.preventDefault(); //stop page from refresh/submitting
    //get text from input - without touching the DOM
    console.log(this); //now equal to instance of store picker

    //change the page to store/whatever the user enters
  }

  render() {
    return (
      //only ever return ONE element, you can put as many child elements inside a parent element, cannot return sibling elements
      //the solution to that - wrap them in a React.Fragment tag!
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*goToStore not calling the function - pointing to the ref of the function or else itll call on page render*/}
        <h2>Please enter a store</h2>
        {/*must used defaultValue="hello" cannot manually set to value because it must be from state*/}
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
