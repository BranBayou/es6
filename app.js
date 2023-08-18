document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows.join('\n'));

  for(const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(output);
  }
});
/*
underscore_case
first_name
Some_Variables
calculate_AGE
delayed_departure
*/