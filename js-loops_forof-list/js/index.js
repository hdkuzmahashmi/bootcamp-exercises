console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const pl of programmingLanguages) {
  const lielm = document.createElement("li");
  lielm.textContent = pl;
  ol.append(lielm);
}
