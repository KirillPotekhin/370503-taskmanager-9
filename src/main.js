import {getTask} from './data.js';

import {createSiteMenuTemplate} from './components/site-menu.js';

import {createSearchTemplate} from './components/search.js';

import {createFilterTemplate} from './components/filter.js';

import {createBoardFilterTempleate} from './components/board-filter.js';

import {createCardTaskTemlate} from './components/card-task.js';

import {createAddFormCardTaskTemplate} from './components/add-task.js';

import {createEditFormCardTaskTemplate} from './components/edit-task.js';

import {createButtonLoadMoreTemplate} from './components/load-more-button.js';

const main = document.querySelector('.main');

const control = document.querySelector('.control');

const createBoardWrapper = () => `<section class="board container"></section>`;

const createBoardTaskWrapper = () => `<div class="board__tasks"></div>`;

const render = (container, markUp, place = 'beforeend') => container.insertAdjacentHTML(place, markUp);

const TASK_COUNT = 10;

const tasksList = [];

for(let i = 0; i < TASK_COUNT; i++) {
  tasksList[i] = getTask();
}

const dataFilters = [
  {
    title: `ALL`, 
    count() {
      return tasksList.filter(it => it.isArchive !== true);
    }
  },
  {
    title: `OVERDUE`,
    count() {
      return tasksList.filter(it => it.dueDate < Date.now());
    }
  },
  {
    title: `TODAY`, 
    count() {
      return tasksList.filter(it => it.dueDate === Date.now());
    }
  },
  {
    title: `FAVORITES`, 
    count() {
      return tasksList.filter(it => it.isFavorite);
    }
  },
  {
    title: `REPEATING`, 
    count() {
      return tasksList.filter(it => Object.keys(it.repeatingDays).some(day => it.repeatingDays[day]));
    }
  },
  {
    title: `TAGS`, 
    count() {
      return tasksList.filter(it => it.tags.size);
    }
  },
  {
    title: `ARCHIVE`, 
    count() {
      return tasksList.filter(it => it.isArchive);
    }
  },
];

render(control, createSiteMenuTemplate());
render(main, createSearchTemplate());
render(main, createFilterTemplate(dataFilters));

render(main, createBoardWrapper());
const boardContainer = main.querySelector('.board');

render(boardContainer, createBoardFilterTempleate());

render(boardContainer, createBoardTaskWrapper());
const boardTaskContainer = main.querySelector('.board__tasks');

const NUMBER_ONE_RENDER_TASKS = 8;

const firstRenderTask = () => {
  const firstRenderTaskNumber = TASK_COUNT <= NUMBER_ONE_RENDER_TASKS ? TASK_COUNT : NUMBER_ONE_RENDER_TASKS;

  boardTaskContainer.insertAdjacentHTML('beforeend', createEditFormCardTaskTemplate(tasksList[0]));
  for(let i = 1; i < firstRenderTaskNumber; i++) {
    boardTaskContainer.insertAdjacentHTML('beforeend', createCardTaskTemlate(tasksList[i]));
  }  
}

firstRenderTask();

// render(boardTaskContainer, createAddFormCardTaskTemplate(), 'afterbegin');

render(boardContainer, createButtonLoadMoreTemplate());

const loadMoreButton = boardContainer.querySelector('.load-more');
loadMoreButton.addEventListener('click', () => {
  const boardTasksNumber = boardTaskContainer.querySelectorAll('.card');
  
  const numberRenderTask = (TASK_COUNT - boardTasksNumber.length < NUMBER_ONE_RENDER_TASKS) && (TASK_COUNT - boardTasksNumber.length > 0) ? TASK_COUNT - boardTasksNumber.length : NUMBER_ONE_RENDER_TASKS;

  for(let i = (boardTasksNumber.length); i < (boardTasksNumber.length + numberRenderTask); i++) {
    boardTaskContainer.insertAdjacentHTML('beforeend', createCardTaskTemlate(tasksList[i]));
  }

  const boardTasksNumberAfterRender = boardTaskContainer.querySelectorAll('.card');
  if (boardTasksNumberAfterRender.length === TASK_COUNT) {loadMoreButton.classList.add('visually-hidden')}
});
