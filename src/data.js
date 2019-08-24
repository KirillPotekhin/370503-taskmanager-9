export const getTask = () => ({
  description: [
    `Learn the theory`,
    `Make homework`,
    `Pass intensively on a hundred`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() - 24 * 60 * 60 * 1000 + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'Mo': Boolean(Math.round(Math.random())),
    'Tu': Boolean(Math.round(Math.random())),
    'We': Boolean(Math.round(Math.random())),
    'Th': Boolean(Math.round(Math.random())),
    'Fr': Boolean(Math.round(Math.random())),
    'Sa': Boolean(Math.round(Math.random())),
    'Su': Boolean(Math.round(Math.random())),
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