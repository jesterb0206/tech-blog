const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title:
      'My Top 20 Favorite Bootstrap Icons to Use When I Am Incredibly Depressed',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus. Placerat duis ultricies lacus sed turpis. In est ante in nibh mauris cursus. Aliquet bibendum enim facilisis gravida neque convallis a.',
    user_id: '1',
  },
  {
    id: 2,
    title: '10 CSS Hacks You Did Not Know You Needed',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Sapien eget mi proin sed libero enim sed faucibus. Posuere ac ut consequat semper viverra nam. In ante metus dictum at.',
    user_id: '2',
  },
  {
    id: 3,
    title: 'Zodiac Signs as Programming Languages',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Habitant morbi tristique senectus et netus et malesuada fames ac. A diam maecenas sed enim ut. Nunc consequat interdum varius sit amet mattis vulputate.',
    user_id: '3',
  },
  {
    id: 4,
    title:
      '17 NPM Packages With So Many Downloads They Are Practically Legends',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante. Augue ut lectus arcu bibendum at varius vel. Purus in massa tempor nec feugiat nisl pretium. Libero volutpat sed cras ornare arcu dui.',
    user_id: '4',
  },
  {
    id: 5,
    title: 'How Well Can You Tell These Famous CSS Preprocessors Apart',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Turpis egestas sed tempus urna et pharetra pharetra. Eget nullam non nisi est sit amet facilisis magna etiam.',
    user_id: '5',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
