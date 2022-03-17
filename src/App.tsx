import { useState } from 'react';
import { Comment } from './components/Comment';

import { AppRoutes } from './Routes';

function App() {
  // const [comments, setComments] = useState<string[]>([
  //   'Comment 1',
  //   'Comment 2',
  //   'Comment 3',
  // ]);

  // function newComment() {
  //   setComments([...comments, "Comment 4"])
  // }

  // return (
  //   <div>
  //     {
  //       comments.map(comment => {
  //         return <Comment comment={comment} />
  //       })
  //     }
      
  //     <button onClick={newComment}>Adicionar comentário</button>
  //   </div>
  // )

  return (
    <AppRoutes />
  )
}

export default App;