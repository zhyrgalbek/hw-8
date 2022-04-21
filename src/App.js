import './App.css';
import Comment from './components/comment';

const comment = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];


function proverComment(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == num) {
      return false;
    }
  }
  return true;
}


function App() {
  return (
    <div className='App'>
      {
        comment.map((elem, index, arr) => {
          let key = Math.floor(Math.random() * (arr.length + 10) + 1);
          if (proverComment(key, arr)) {
            elem.id = key;
          } else {
            while (!proverComment(key, arr)) {
              key = Math.floor(Math.random() * (arr.length + 10) + 1);
            }
            elem.id = key;
          }
          return <Comment comment={elem} key={elem.id} />
        })
      }
    </div>
  );
}

export default App;