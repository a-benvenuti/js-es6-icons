//--------------------------------- FUNZIONI--------------------------------------
function printIcons(wherePrint, icons){
  wherePrint.html("");
  icons.forEach((icon) => {
    const {name, prefix, family, color} = icon;
    const html = `
        <div>
          <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
          <div class="title">${name}</div>
        </div>`;
    wherePrint.append(html);
  });
}
//----------------------------fine delle FUNZIONI---------------------------------

// Milestone 1: Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const icons = [
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
];
const iconsContainer = $(".icons");

// Milestone 2: Coloriamo le icone per tipo
const colors = [
  "yellow",
  "red",
  "green"
];

const categories = [];
icons.forEach((icon) => {
  if (categories.includes(icon.category) == false) {
    categories.push(icon.category);
  }
});

const iconsColored = icons.map((icon) => {
  const categoryIndex = categories.indexOf(icon.category);
  const colorItem = colors[categoryIndex];
  icon.color = colorItem;
  return icon;
});

printIcons(iconsContainer, iconsColored); //iconsContainer = $('.icons');

// Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone
