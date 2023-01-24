const resources = [
  {
    title: 'CMYK',
    subtitle: 'video',
    link: 'https://vimeo.com/138106887',
    desc: 'A story about 3 ways to mix process colors.',
    category: ['Color'],
  },
  {
    title: 'ASD',
    subtitle: 'video',
    link: 'https://vimeo.com/138106887',
    desc: 'A story about 3 ways to mix process colors.',
    category: ['Color'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['accessibility'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['branding'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['collaboration'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['data viz'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['figma plugin'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['Design System'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['illustration'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['inspiration'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['new to Dev'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['new to UX'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['photography'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['product development'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['research methods'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['tools'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['typography'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['web dev'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['workflow'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['Fron-end Interview'],
  },
  {
    title: '',
    subtitle: '',
    link: '',
    desc: '',
    category: ['UX Interview'],
  },
].map((res) => ({ ...res, category: res.category.sort() }));

const categories = [
  ...new Set(resources.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { categories, resources };
