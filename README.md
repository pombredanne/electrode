# Electrode

![Image of Electrode]
(https://pokemontsm.files.wordpress.com/2014/07/electrode.png)

## Setup

Prerequisites:
* [Homebrew](http://brew.sh/)
* [Python with pip](http://stackoverflow.com/a/17271838)
* [Virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/)
* Node with npm:
```
brew install node
```
* Grunt command line interface globally
```
sudo npm install -g grunt-cli
```

### Local Environment
Clone the repo and `cd` into it.

*Run all commands from the project root*

Create the virtual environment:
```Bash
$ mkvirtualenv electrode
```

Install Python dependencies
```Bash
$ pip install -r requirements.txt
```

Install Node dependencies
```Bash
$ sudo npm install
```

### Development

Start the python server:
```Bash
$ python runserver.py
```

In another terminal tab, start Electron:
```Bash
$ npm start
```

To see your Python changes, kill the server <kbd>control</kbd> + <kbd> c </kbd> and start it again.

> Live reloading the Python server is on the todo list

To see your Electron changes (JS/HTML/CSS), you can just refresh the window:
<kbd>command</kbd> + <kbd>r</kbd>


## Working happily together :)

Adding features:

1. Create a branch off `master`

2. Do your work, commit often, write tests first (if possible).

3. When your tests pass and feature is ready, push up your branch.

4. Make a pull request from your branch into `master`

5. Let **someone else** code review and merge your PR.

Bug fixes:

1. Report an [issue](https://guides.github.com/features/issues/).

2. In the issue, document how to recreate the bug.

## Resources
- https://www.fyears.org/2015/06/electron-as-gui-of-python-apps.html
- https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658
- http://flask.pocoo.org/

## TODO

- Initial tests
- More routes + serve up HTML templates
- Flask server live-reload
- Get some JS going on the front-end
