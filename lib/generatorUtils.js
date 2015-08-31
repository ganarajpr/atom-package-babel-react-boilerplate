'use babel';
import path from 'path';
import fs from 'fs-plus';

export function getPackagesDirectory() {
    return atom.config.get('core.projectHome') ||
            process.env.ATOM_REPOS_HOME ||
            path.join(fs.getHomeDirectory(), 'github');
}


export function getPackagePath(){
    var packageName, packagePath;
    packagePath = this.editor.getText();
    packageName = _.dasherize(path.basename(packagePath));
    return path.join(path.dirname(packagePath), packageName);
}
