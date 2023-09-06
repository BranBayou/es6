// How we origanize in JS

// Clsasses

class Page {
  constructor(text) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }
}

class Notebook {
  constructor() {
    this.pages = [];
  }
  addPage(text) {
    var page = new Page(text);
    this.pages.push(page);
  }
  print() {
    for(let page of this.pages) {
      page.print();
    }
  }
}

const mathNotes = new Notebook();
mathNotes.addPage('Arithmetic: + - * /');
mathNotes.addPage('Trigonometric: sin con tan');
mathNotes.print();

