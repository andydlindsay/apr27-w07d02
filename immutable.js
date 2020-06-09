const user = {
  name: 'Alice',
  age: 25,
  likes: ['pizza']
};

const otherUser = {
  ...user,
  name: 'Bob',
  likes: [
    ...user.likes,
    'bananas'
  ]
};

// otherUser.name = 'Bob';
// otherUser.likes.push('bananas');
user.likes !== otherUser.likes;

console.log(user);
console.log(otherUser);
