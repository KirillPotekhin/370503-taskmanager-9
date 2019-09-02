export const getTask = () => ({
  description: [
    `Learn the theory`,
    `Make homework`,
    `Pass intensively on a hundred`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() - 24 * 60 * 60 * 1000 + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'mo': Boolean(Math.round(Math.random())),
    'tu': false,
    'we': false,
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },
  tags: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ]),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isArchive: Boolean(Math.round(Math.random())),
  isFavorite: Boolean(Math.round(Math.random())),
});