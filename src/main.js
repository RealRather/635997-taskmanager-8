import makeFilter from './make-filter.js';
import makeTask from './make-task.js';

const COUNT_CARDS = 7;
const MIN_RANDOM_VALUE = 1;
const MAX_RANDOM_VALUE = 50;

const filters = {
  all: `ALL`,
  overdue: `OVERDUE`,
  today: `TODAY`,
  favorites: `FAVORITES`,
  repeating: `REPEATING`,
  tags: `TAGS`,
  archive: `ARCHIVE`
};

const mainFiltersBlock = document.querySelector(`.main__filter`);
const boardTasksBlock = document.querySelector(`.board__tasks`);

const getRandomFixValue = ((minValue, maxValue) => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

const renderCards = ((countCards, container) => {
  container.innerHTML = ``;
  new Array(countCards)
    .fill(makeTask())
    .map(() => container
      .appendChild(makeTask())
    );
});

const createFiltersElements = ((filtersObj) => {
  const filtersKeys = Object.keys(filtersObj);
  return filtersKeys
    .map((key) => {
      let state;
      switch (key) {
        case `all`:
          state = `checked`;
          break;
        case `overdue`:
          state = `disabled`;
          break;
        case `today`:
          state = `disabled`;
          break;
      }
      return makeFilter(key, filters[key], state, getRandomFixValue(MIN_RANDOM_VALUE, MAX_RANDOM_VALUE));
    })
    .join(``);
});


const renderFilters = ((container, filtersObj) => {
  container.innerHTML = (createFiltersElements(filtersObj));
  container.addEventListener(`click`, (evt) => onFilterLabelClickHandler(evt), true);
});

const onFilterLabelClickHandler = ((evt) => {
  evt.stopPropagation();
  renderCards(
      getRandomFixValue(1, COUNT_CARDS),
      boardTasksBlock
  );
});

renderFilters(mainFiltersBlock, filters);
renderCards(COUNT_CARDS, boardTasksBlock);
