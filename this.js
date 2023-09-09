function classroom(teacher) {
  return function study() {
    console.log(`${teacher} sayes to study ${this.topic}`)
  }
}
const assignment = classroom("Kyle");

const homework = {
  topic: 'JS',
  assignment: assignment
};

const otherHomework = {
  topic: 'Math'
};

console.log(homework.assignment())
console.log(assignment.call(otherHomework));

// this revised

const homework1 = {
  study() {
    console.log(`Please study ${this.topic}`);
  }
};

const jsHomework = Object.create(homework1);
jsHomework.topic = 'JavaS';
jsHomework.study();

const mathHomework = Object.create(homework1);
mathHomework.topic = 'Math';
mathHomework.study();