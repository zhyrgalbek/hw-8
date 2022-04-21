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



function App() {
  return (
    <div className='App'>
      {
        comment.map(elem=>{
          let commentsKey = Math.random();
          elem.id = commentsKey; 
          return <Comment comment={elem} key={elem.id} />    
        })
      }
    </div>
  );
}

export default App;
