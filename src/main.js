import {getTask} from './data.js';

import {createSiteMenuTemplate} from './components/site-menu.js';

import {createSearchTemplate} from './components/search.js';

import {createFilterTemplate} from './components/filter.js';

import {createBoardFilterTempleate} from './components/board-filter.js';

import {createCardTaskTemlate} from './components/card-task.js';

import {createAddFormCardTaskTemplate} from './components/add-task.js';

import {createButtonLoadMoreTemplate} from './components/load-more-button.js';

const main = document.querySelector('.main');

const control = document.querySelector('.control');

const createBoardWrapper = () => `<section class="board container"></section>`;

const createBoardTaskWrapper = () => `<div class="board__tasks"></div>`;

const render = (container, markUp, place = 'beforeend') => container.insertAdjacentHTML(place, markUp);

render(control, createSiteMenuTemplate());
render(main, createSearchTemplate());
render(main, createFilterTemplate());

render(main, createBoardWrapper());
const boardContainer = main.querySelector('.board');

render(boardContainer, createBoardFilterTempleate());

render(boardContainer, createBoardTaskWrapper());
const boardTaskContainer = main.querySelector('.board__tasks');

const TASK_COUNT = 18;

const tasksList = [];

for(let i = 0; i < TASK_COUNT; i++) {
  tasksList[i] = getTask();
}

const NUMBER_ONE_RENDER_TASKS = 8;

const firstRenderTask = () => {
  const firstRenderTaskNumber = TASK_COUNT <= NUMBER_ONE_RENDER_TASKS ? TASK_COUNT : NUMBER_ONE_RENDER_TASKS;

  for(let i = 0; i < firstRenderTaskNumber; i++) {
    boardTaskContainer.insertAdjacentHTML('beforeend', createCardTaskTemlate(tasksList[i]));
  }  
}

firstRenderTask();

render(boardTaskContainer, createAddFormCardTaskTemplate(), 'afterbegin');

render(boardContainer, createButtonLoadMoreTemplate());

const loadMoreButton = boardContainer.querySelector('.load-more');
loadMoreButton.addEventListener('click', () => {
  const boardTasksNumber = boardTaskContainer.querySelectorAll('.card');
  
  const numberRenderTask = (TASK_COUNT - boardTasksNumber.length < NUMBER_ONE_RENDER_TASKS) && (TASK_COUNT - boardTasksNumber.length > 0) ? TASK_COUNT - boardTasksNumber.length : NUMBER_ONE_RENDER_TASKS;

  for(let i = (boardTasksNumber.length); i < (boardTasksNumber.length + numberRenderTask); i++) {
    boardTaskContainer.insertAdjacentHTML('beforeend', createCardTaskTemlate(tasksList[i]));
    console.log('i', i, 'кол карт для отрисовки', numberRenderTask, 'длина контейнера', boardTasksNumber.length);
  }

  const boardTasksNumberAfterRender = boardTaskContainer.querySelectorAll('.card');
  if (boardTasksNumberAfterRender.length === TASK_COUNT) {loadMoreButton.classList.add('visually-hidden')}
});