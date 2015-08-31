'use babel';

import {CompositeDisposable} from 'event-kit';

function createView (): HTMLElement {

  var hostElement = new PluginGeneratorElement();
  var component = React.render(<PluginGeneratorComponent/>,
    hostElement);

  return hostElement;
}

class PackageGeneratorBabel {
    constructor() {
        this.active = false;
    }

    isActive() {
        return this.active;
    }

    activate(state) {
        this.subscriptions = new CompositeDisposable;
        var generatorSubscription = atom.commands.add(
            atom.views.getView(atom.workspace),
            'package-generator:generate-babel-plugin', () => {
                console.log("plugin generator activated");
            }
        );
        this.subscriptions.add(generatorSubscription);
    }

    deactivate() {

    }
}

export default new PackageGeneratorBabel();
