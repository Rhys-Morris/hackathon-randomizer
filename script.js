const names = [
  "Ana",
  "Darko",
  "Joey",
  "Irina",
  "Yuri",
  "Shravani",
  "Ryan",
  "John",
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function randomizer(nameArr) {
  let [currentGroup, selected] = [0, []];
  const groupArrays = [[], [], []];
  groupArrays[0].push("Rhys");
  for (let i = 0; i < nameArr.length; i++) {
    let selectedPerson;
    while (selected.includes(selectedPerson) || !selectedPerson) {
      const randomIndex = Math.floor(Math.random() * nameArr.length);
      selectedPerson = nameArr[randomIndex];
    }
    groupArrays[currentGroup].push(selectedPerson);
    selected.push(selectedPerson);
    // Increment group
    if (selected.length === 2 || selected.length === 5) {
      currentGroup++;
    }
  }
  groupArrays[2].push("Irah");
  renderNames(groupArrays);
}

async function renderNames(groups) {
  for (let i = 0; i < groups.length; i++) {
    await delay(1000);
    for (let person of groups[i]) {
      await delay(1000);
      const targetGroup = document.querySelector(`.group-${i + 1}`);
      const name = document.createElement("p");
      name.textContent = person;
      targetGroup.appendChild(name);
    }
  }
}

window.onload = randomizer(names);
