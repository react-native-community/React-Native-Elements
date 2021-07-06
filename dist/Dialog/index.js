import { withTheme } from '../config';
import { DialogLoading } from './DialogLoading';
import { DialogTitle } from './DialogTitle';
import { DialogButton } from './DialogButton';
import { DialogActions } from './DialogActions';
import { DialogBase } from './DialogBase';
const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');
export const Dialog = Object.assign(DialogBase);
const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});
export default ThemedDialog;
