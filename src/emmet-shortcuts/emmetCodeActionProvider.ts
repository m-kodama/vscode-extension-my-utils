import * as vscode from "vscode";

export class EmmetCodeActionProvider implements vscode.CodeActionProvider {
  public provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range,
    context: vscode.CodeActionContext,
    token: vscode.CancellationToken
  ): vscode.CodeAction[] | undefined {
    const actionDefines: vscode.Command[] = [
      {
        command: "editor.emmet.action.wrapWithAbbreviation",
        title: "Wrap with Abbreviation [Emmet]",
        arguments: [],
      },
      {
        command: "editor.emmet.action.wrapWithAbbreviation",
        title: "Wrap with <div> [Emmet]",
        arguments: [{
          "abbreviation": "div"
        }],
      },
      {
        command: "editor.emmet.action.removeTag",
        title: "Remove Tag [Emmet]",
        arguments: [],
      },
    ];
    return [
      ...actionDefines.map(this.createAction)
    ];
  }

  private createAction(command: vscode.Command): vscode.CodeAction {
    const action = new vscode.CodeAction(
      command.title,
      vscode.CodeActionKind.Empty
    );
    action.command = {...command};
    return action;
  }
}
