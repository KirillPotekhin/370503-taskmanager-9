export const createFilterTemplate = (dataFilters) => {
  return (() => {
    let filterContainer = [];
    filterContainer.push(`<section class="main__filter filter container">`);
    for (let i = 0; i < dataFilters.length; i++) {
      filterContainer.push(`<input
        type="radio"
        id="filter__${dataFilters[i].title.toLowerCase()}"
        class="filter__input visually-hidden"
        name="filter"
        ${i === 0 ? `checked` : ``}
        ${dataFilters[i].count().length ? `` : `disabled`}
        />
        <label for="filter__all" class="filter__label">
        ${dataFilters[i].title} <span class="filter__all-count">${dataFilters[i].count().length}</span></label
        >`
      );
    }
    filterContainer.push(`</section>`);
    return filterContainer.join(``);
  })();
};
