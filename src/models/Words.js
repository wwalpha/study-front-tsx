import { Record, List } from 'immutable';
import Word from './Word';

const WordsRecord = Record({
  page: 0,
  rowsPerPage: 7,
  list: List(),
});

export default class Words extends WordsRecord {
  distinct() {
    const list = this.list.toJS();
    const newList = [];

    list.forEach((item) => {
      const ret = newList.find(subItem => item.id.wordNo === subItem.id.wordNo);

      if (ret === undefined) {
        newList.push(item);
      } else if (!ret.checked) {
        ret.checked = item.checked;
      }
    });

    return newList;
  }

  clearWords() {
    return this
      .set('list', List())
      .set('page', 0);
  }

  addWords(wordList) {
    // サーバから新規取得する
    let newList = wordList.map(item => new Word(item));
    // 既存と結合する
    newList = this.list.concat(List(newList));
    // ページ数再計算
    const page = Math.ceil(newList.size / this.rowsPerPage);

    return this
      .set('list', newList)
      .set('page', page);
  }

  clearSave() {
    const newList = this.list.filter(item => item.checked);

    const page = newList.size === 0 ? 0 : Math.ceil(newList.size / this.rowsPerPage);
    return this
      .set('list', newList)
      .set('page', page);
  }

  clearRest() {
    const newList = this.list.filter(item => !item.checked);

    const page = newList.size === 0 ? 0 : Math.ceil(newList.size / this.rowsPerPage);
    return this
      .set('list', newList)
      .set('page', page);
  }

  nextPage() {
    return this.set('page', this.page + 1);
  }

  prevPage() {
    if (this.page <= 0) return this;
    return this.set('page', this.page - 1);
  }

  setSelected(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.list.update(index, value => value.set('checked', !value.checked));

    return this.set('list', newList);
  }

  setFavorite(rowIndex) {
    const index = (this.page * this.rowsPerPage) + rowIndex;
    const newList = this.list.update(index, value => value.set('favorite', !value.favorite));

    return this.set('list', newList);
  }

  getPageList() {
    if (this.page === 0) return [];

    const pageList = this.list.slice((this.page - 1) * this.rowsPerPage, this.page * this.rowsPerPage);
    return pageList.toJS();
  }
}
