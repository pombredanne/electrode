# Electrode

## Setup

### Make sure you have the following installed

- [Homebrew](http://brew.sh/)

- [Python with pip](http://stackoverflow.com/a/17271838)

- [Virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/)

### Setup the environment

- Clone the repo and `cd` into it.

*Run all commands from the project root*

- Create the virtual environment
```Bash
mkvirtualenv electrode
```

- Install Python dependencies in our new environment
```Bash
pip install -r requirements.txt
```

## Git practices

### Adding features

- Create a branch off `master`

- Do your work, commit often, write tests first (if possible).

- When ready, push up your branch.  

- Make a pull request from your branch into `master`

- Let **someone else** code review and merge your PR.

### Bug fixes

- Report an [issue](https://guides.github.com/features/issues/).

- In the issue, document how to recreate the bug.

## Resources
- https://www.fyears.org/2015/06/electron-as-gui-of-python-apps.html
- https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658
- http://flask.pocoo.org/
