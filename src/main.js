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

new Array(3).fill(``).forEach(() => render(boardTaskContainer, createCardTaskTemlate()));

render(boardTaskContainer, createAddFormCardTaskTemplate(), 'afterbegin');

render(boardContainer, createButtonLoadMoreTemplate());
