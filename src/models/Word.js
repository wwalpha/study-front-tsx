import { Record } from 'immutable';

const WordRecord = Record({
  checked: false,
  id: undefined,
  category: undefined,
  word: undefined,
  pronounce: undefined,
  vocabulary: undefined,
  startPos: 0,
  endPos: 0,
  favorite: false,
  rate: 0,
  studyTime: 0,
  nextTime: 0,
  times: 0,
  sound: undefined,
  index: 0,
});

export default class Word extends WordRecord {

}
