export const createFilterTemplate = (dataFilters) => {
  return `<section class="main__filter filter container">
    <input
    type="radio"
    id="filter__all"
    class="filter__input visually-hidden"
    name="filter"
    checked
    ${dataFilters[0].count().length ? `` : `disabled`}
    />
    <label for="filter__all" class="filter__label">
    ${dataFilters[0].title} <span class="filter__all-count">${dataFilters[0].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__overdue"
    class="filter__input visually-hidden"
    name="filter"
    ${dataFilters[1].count().length ? `` : `disabled`}
    />
    <label for="filter__overdue" class="filter__label"
    >${dataFilters[1].title} <span class="filter__overdue-count">${dataFilters[1].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__today"
    class="filter__input visually-hidden"
    name="filter"
    ${dataFilters[2].count().length ? `` : `disabled`}
    />
    <label for="filter__today" class="filter__label"
    >${dataFilters[2].title} <span class="filter__today-count">${dataFilters[2].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__favorites"
    class="filter__input visually-hidden"
    name="filter"
    />
    <label for="filter__favorites" class="filter__label"
    >${dataFilters[3].title} <span class="filter__favorites-count">${dataFilters[3].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__repeating"
    class="filter__input visually-hidden"
    name="filter"
    />
    <label for="filter__repeating" class="filter__label"
    >${dataFilters[4].title} <span class="filter__repeating-count">${dataFilters[4].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__tags"
    class="filter__input visually-hidden"
    name="filter"
    />
    <label for="filter__tags" class="filter__label"
    >${dataFilters[5].title} <span class="filter__tags-count">${dataFilters[5].count().length}</span></label
    >
    <input
    type="radio"
    id="filter__archive"
    class="filter__input visually-hidden"
    name="filter"
    />
    <label for="filter__archive" class="filter__label"
    >${dataFilters[6].title} <span class="filter__archive-count">${dataFilters[6].count().length}</span></label
    >
  </section>`;
};
