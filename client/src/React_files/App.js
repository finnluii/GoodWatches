import React from 'react';
import './App.css';
import Search from './Search';

function App() {
  const [contents, setContents] = React.useState("");

  // const getTrendingContent = () => {
  //   fetch('/trending')
  //   .then(response => response.json())
  //   .then(body => setContents(body));
  // }

  const getTrendingContent = async () => {
    const response = await fetch("/trending");
    const body = await response.json();

    setContents(body);
  }
  
  React.useEffect(() => getTrendingContent(), []);
  return (
    <div className="App" onLoad={getTrendingContent}>
      <h1>GoodWatches</h1>
      <Search/>

      Trending: 
      {console.log(contents.results)}
      {contents.results && contents.results.map(content => (
        <p key={content.id}>{content.title}</p>
        // <p>
        //   <span>Key Name: {content[1]}</span>
        // </p>
      ))}
      {/* {JSON.stringify(Object.entries(contents))} */}
    </div>
  );
}

export default App;
