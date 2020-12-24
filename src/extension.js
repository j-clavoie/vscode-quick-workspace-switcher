const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('quick-workspace-switcher.select', async function () {
		// Call the main function
		await switchWetWorkspace();
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
module.exports = {
	activate,
	deactivate
}


/* ******************************************************************************** */
/* ******************************************************************************** */
/* ******************************************************************************** */
/* ******************************************************************************** */


/**
 * Method that open the Workspace selected by the user
 */
async function switchWetWorkspace() {
	// Get a Workspace path to open
	let workspacePath = await getWorkspacePath();
	// If null then exit without any more process
	if (workspacePath == null) {
		return;
	}
	// Set the path to open
	let workspaceUri = vscode.Uri.file(workspacePath);
	// Open the Workspace
	await vscode.commands.executeCommand('vscode.openFolder', workspaceUri);
}


/**
 * Method to get from a dropdown popup a workspace and
 * return the path of this workspace
 * All information about workspace are stored in Extension properties
 */
async function getWorkspacePath() {
	// Get Extension properties
	const extConfigs = vscode.workspace.getConfiguration("quick-workspace-switcher");
	// Create a empty array that will contain all Workspace Names
	let listWorspaces = [];

	// Option for the dropdown popup
	let options = vscode.QuickPickOptions = {
		placeHolder: "Select the Workspace you want to switch to:",
		canPickMany: false,
		ignoreFocusOut: true,
		matchOnDescription: true,
		matchOnDetail: true
	};

	// Pass through all Workspace set in Extension properties
	extConfigs.workspaces.forEach(function (elem) {
		// Add only the name to the array
		listWorspaces.push(elem.name);
	});

	// Display the dropdown popup to user
	const workspaceName = await vscode.window.showQuickPick(listWorspaces, options);
	// If Escape key has been used = exit without any other process
	if (workspaceName == undefined) {
		return null;
	}

	// Define de default return for this function (null)
	let workspacePath = null;
	// Pass through all Workspace set in Extension properties
	extConfigs.workspaces.forEach(function (elem) {
		// If the user's selection match set the path to return
		if (workspaceName == elem.name) {
			workspacePath = elem.path;
		}
	});

	// Return the path or NULL if the escape key has been used
	return workspacePath;
}


