import {useState, useEffect} from 'react';
import UpdateTable from './UpdateTable';

function App() {
  const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const API_COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
  const API_USERS_URL = 'https://jsonplaceholder.typicode.com/users';

  const [contentUrl, setContentUrl] = useState('API_USERS_URL');
  const [listItems, setListItems] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async() =>{
      try{
        console.log(contentUrl);
        const response = await fetch(contentUrl);
        if(!response.ok) throw Error('Did note receive expected data');
        const listItems = await response.json();
        // console.log(listItems);
        setListItems(listItems);
        setFetchError(null);
      }catch (err){
        setFetchError(err.message);
      } finally{
        setIsLoading(false);
      }
    }
    fetchItems();
  },[contentUrl])

  return (
    <div className="App">
      <div className="button_group">
        <button onClick={() => {setContentUrl(API_USERS_URL)} } >users</button>
        
        <button onClick={() => {setContentUrl(API_POSTS_URL)} } >posts</button>

        <button onClick={() => {setContentUrl(API_COMMENTS_URL)} } >comments</button>
      </div>
      { !isLoading && !fetchError &&
        <UpdateTable 
          listItems = {listItems}
        />
      }
      
    </div>
  );
}

export default App;
