# Quick Workspace Switcher Extension for Visual Studio Code
This is a Visual Studio Code extension to quickly switch from the current workspace to another one.

## Overview
This extension allows user to quickly switch from Workspace to another.

VS Code already has a "Quick open recent" feature that does something like that, but it doesn't have friendly name and it displays to many recent files even them that not a project or useless/unimportant.

This extension is to gather all projects in one extension and quickly switch from one to other.

## How to use
First of all, extension's parameters must be set in settings to add workspace's name and workspace's path.

Once settings are completed. 
+ Use the <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> and typing "Quick Workspace Switcher". Or add key shortcut to this extension.
+ Select the Workspace to open

## Configuration instructions
This extension has 2 properties

### Workspaces
This setting is used to defines all workspace information to have in the dropdown selection popup.
It must be set manually in the JSON settings file, reachable from VSCode settings.

It's an array of objects with :
+ friendly name of the workspace
+ full path of the workspace, including the workspace filename. (ex.:```[...]/workspace/workspacename.code-workspace``` )
```JSON
"quick-workspace-switcher.workspaces": [
  {
    "name": "No workspace set for the moment",
    "path": ""
  }
]
```
### Save Before Switch
This setting is used to define if opened files must be saved before to switch to other workspace.

The default behavior of VSCode is to keep opened files in "memory".
This setting looks like useless but the option is there for who like to save their work before to quit.

## License
[MIT](https://choosealicense.com/licenses/mit/)