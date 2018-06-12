import { Radio } from '../index';

export default () => ({
  ...Radio,
  formControlLabel_root: {
    marginLeft: '-2px',
  },
  radio_root: {
    width: '32px',
    height: '32px',
  },
});
