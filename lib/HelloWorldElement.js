'use babel';

/* @flow */
import React from 'react-for-atom';
import HelloWorldComponent from './HelloWorldComponent';

class HelloWorldElement extends HTMLElement {

  initialize() {
    return this;
  }

  setVisibility(visible){
      React.render(
          <HelloWorldComponent
              textContent="Hello World">
          </HelloWorldComponent>,
        this
      );
  }

  attachedCallback() {
    React.render(
        <HelloWorldComponent
            textContent="Hello World">
        </HelloWorldComponent>,
      this
    );
  }

  detachedCallback() {
    React.unmountComponentAtNode(this);
  }

}

module.exports = HelloWorldElement = document.registerElement('hello-world-element', {
  prototype: HelloWorldElement.prototype,
});
