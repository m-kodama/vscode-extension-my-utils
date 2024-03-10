import * as vscode from "vscode";
import { EmmetCodeActionProvider } from "./emmet-shortcuts/emmetCodeActionProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "my-utils" is now active!');

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      ["vue", "html"],
      new EmmetCodeActionProvider(),
      {
        providedCodeActionKinds: [vscode.CodeActionKind.Empty],
      }
    )
  );
}

export function deactivate() {}
