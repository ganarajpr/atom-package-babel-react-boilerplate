'use babel';

import React from 'react-for-atom';

var {Component} = React;


export default class PluginGeneratorComponent extends Component {
    constructor(props) {
        super(props);
        props.textContent = props.textContent || '';
        this._editor = null;
    }

    componentDidMount(){
        var textEditor = React.findDOMNode(this.refs.textEditor);
        this._editor = textEditor.getModel();
        textEditor.focus();
    }

    // setPathText(placeholderName, rangeToSelect) {
    //     var endOfDirectoryIndex, packagesDirectory, pathLength;
    //     if (rangeToSelect == null) {
    //         rangeToSelect = [0, placeholderName.length];
    //     }
    //     packagesDirectory = this.getPackagesDirectory();
    //     this._editor.setText(path.join(packagesDirectory, placeholderName));
    //     pathLength = this._editor.getText().length;
    //     endOfDirectoryIndex = pathLength - placeholderName.length;
    //     this._editor.setSelectedBufferRange([[0, endOfDirectoryIndex + rangeToSelect[0]], [0, endOfDirectoryIndex + rangeToSelect[1]]]);
    // }

    render(){
        return (
            <div ref="root" className="block">
                <atom-text-editor mini="true"
                    ref="textEditor">{this.props.textContent}</atom-text-editor>
            </div>
        );
    }
}
