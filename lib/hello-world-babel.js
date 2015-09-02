'use babel';

import {CompositeDisposable} from 'event-kit';
import React from 'react-for-atom';
import path from 'path';
import _ from 'underscore-plus';
import HelloWorldElement from './HelloWorldElement';

class HelloWorldBabel {

    constructor() {
        this.active = false;
    }

    isActive() {
        return this.active;
    }

    activate(state) {
        this.subscriptions = new CompositeDisposable;
        var viewElement = new HelloWorldElement();
        this.modalPanel = atom.workspace.addModalPanel({
            item : viewElement,
            visible : false
        });

        this.subscriptions.add(this.modalPanel.onDidChangeVisible( (visible)=>{
            viewElement.setVisibility(visible);
        }));

        var generatorSubscription = atom.commands.add(
            atom.views.getView(atom.workspace),
            'test-me:hello-world', () => {
                this.toggleModal();
            }
        );
        this.subscriptions.add(generatorSubscription);

        // Hitting enter when this panel has focus should confirm the dialog.
        this.subscriptions.add(atom.commands.add(
            viewElement,
            'core:confirm',
            (event) => this.onConfirm()));

        // Hitting escape when this panel has focus should cancel the dialog.
        this.subscriptions.add(atom.commands.add(
            viewElement,
            'core:cancel',
            (event) => this.onCancel()));
    }

    toggleModal(){
        if (this.modalPanel.isVisible()){
            this.modalPanel.hide();
        }
        else{
            this.modalPanel.show();
        }
    }

    onConfirm(){
        this.modalPanel.hide();
    }

    onCancel(){
        this.modalPanel.hide();
    }

    deactivate() {
        this.subscriptions.dispose();
        this.modalPanel.destroy();
    }
}

export default new HelloWorldBabel();
