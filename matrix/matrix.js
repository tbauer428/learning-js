//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(x) {
    let rows = x.split('\n');

    this._rows = rows.map((element) => {
      let y = element.split(' ');
        let x = element.split(' ');
      let z = y.map((element) => {
        return parseInt(element);
      });
      return z;
    });

    for (let i = 0; i < this._rows.length; i++) {
      console.log('i is: ' + this._rows[i] + ' index: ' + i);

      this._columns = this._rows[i].map(index => {

      })
    }

    this._columns = rows.map((element) => {
      let y = element.split(' ');
      let z = y.map((element) => {
        return parseInt(element);
      });
      return z;
    });
  }

  set rows(x) {
    this._rows = x;
  }

  set columns(x) {
    this._columns = x;
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
