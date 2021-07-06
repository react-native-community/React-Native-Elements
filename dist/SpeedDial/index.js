import { withTheme } from '../config';
import { SpeedDial } from './SpeedDial';
import { SpeedDialAction, } from './components/SpeedDialAction';
export { SpeedDial };
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: SpeedDialAction,
});
