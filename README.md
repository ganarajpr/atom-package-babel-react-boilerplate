# A package boilerplate for atom using babel and React

I noticed that there were no good starter templates for creating an atom package
for working with babel ( and react ). If you are not interested in working with React as your go-to tool then its pretty easy to strip it out.

This is something I extracted out of the excellent starting work done by [Atom Minimap](https://github.com/atom-minimap/minimap). There are package generators available as part of Atom Minimap - and it comes with babel, js and coffeescript package generators if you are interested.

Some of the code here is also inspired from the work done by Facebook guys in [Nuclide](https://github.com/facebook/nuclide). Nuclide is mostly written in React for the view layers - so you might want to check it out for best practices ( and general how-to's).

##How to get started

    git clone https://github.com/ganarajpr/atom-package-babel-react-boilerplate.git mypackage

Then you will need to symlink this package from your `.atom/packages` folder.

    cd ~/.atom/packages
    ln -s path/to/mypackage mypackage

Once this is done

( `ctrl-alt-r` - Refresh if needed)

*  open atom  
*  then `ctrl-shift-p`
*  type `test me hello world`

You should see a modal open with a text editor in it. 
