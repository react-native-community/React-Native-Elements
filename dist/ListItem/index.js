import { withTheme } from '../config';
import { ListItemBase } from './ListItemBase';
import { ListItemContent } from './ListItemContent';
import { ListItemChevron } from './ListItemChevron';
import { ListItemInput } from './ListItemInput';
import { ListItemCheckBox } from './ListItemCheckBox';
import { ListItemButtonGroup } from './ListItemButtonGroup';
import { ListItemTitle } from './ListItemTitle';
import { ListItemSubtitle } from './ListItemSubtitle';
import { ListItemSwipeable } from './ListItemSwipeable';
import { ListItemAccordion } from './ListItemAccordion';
const ThemedListItemContent = withTheme(ListItemContent, 'ListItemContent');
const ThemedListItemChevron = withTheme(ListItemChevron, 'ListItemChevron');
const ThemedListItemInput = withTheme(ListItemInput, 'ListItemInput');
const ThemedListItemCheckBox = withTheme(ListItemCheckBox, 'ListItemCheckBox');
const ThemedListItemButtonGroup = withTheme(ListItemButtonGroup, 'ListItemButtonGroup');
const ThemedListItemTitle = withTheme(ListItemTitle, 'ListItemTitle');
const ThemedListItemSubtitle = withTheme(ListItemSubtitle, 'ListItemSubtitle');
const ThemedListItemSwipeable = withTheme(ListItemSwipeable, 'ListItemSwipeable');
const ThemedListItemAccordion = withTheme(ListItemAccordion, 'ListItemAccordion');
export const ListItem = Object.assign(ListItemBase);
const ThemedListItem = Object.assign(withTheme(ListItem, 'ListItem'), {
    Accordion: ThemedListItemAccordion,
    Chevron: ThemedListItemChevron,
    Content: ThemedListItemContent,
    Input: ThemedListItemInput,
    Title: ThemedListItemTitle,
    Subtitle: ThemedListItemSubtitle,
    Swipeable: ThemedListItemSwipeable,
    CheckBox: ThemedListItemCheckBox,
    ButtonGroup: ThemedListItemButtonGroup,
});
export default ThemedListItem;
