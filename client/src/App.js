import React from 'react';
import './App.css';

function App() {
  const [content, setContent] = React.useState("temp movie placeholder");

  const getTrendingContent = (searchTerm) => {
    fetch('/trending')
    .then(response => response.json())
    .then(body => setContent(body));
  }

  React.useEffect(() => getTrendingContent(), [])
  return (
    <div className="App" onLoad={getTrendingContent}>
      <h1>GoodWatches</h1>
      Find Content
      Content: {JSON.stringify(content)}
    </div>
  );
}

export default App;
