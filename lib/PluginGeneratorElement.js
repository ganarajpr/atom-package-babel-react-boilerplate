'use babel';

/* @flow */
import {getPackagesDirectory} from './generatorUtils';
import React from 'react-for-atom';
import PluginGeneratorComponent from './PluginGeneratorComponent';

class PluginGeneratorElement extends HTMLElement {

  initialize() {
    return this;
  }

  setVisibility(visible){
      React.render(
          <PluginGeneratorComponent
              visible={visible}
              textContent={getPackagesDirectory()}>
          </PluginGeneratorComponent>,
        this
      );
  }

  attachedCallback() {
    React.render(
        <PluginGeneratorComponent
            visible={true}
             textContent={getPackagesDirectory()}>
         </PluginGeneratorComponent>,
      this
    );
  }

  detachedCallback() {
    React.unmountComponentAtNode(this);
  }

}

module.exports = PluginGeneratorElement = document.registerElement('plugin-generator-element', {
  prototype: PluginGeneratorElement.prototype,
});
