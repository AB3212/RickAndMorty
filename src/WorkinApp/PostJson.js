import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setData(response.data);
        console.log(response)
        setFilteredData(response.data);
        const uniqueUserIds = [...new Set(response.data.map(post => post.userId))];
        setUserIds(uniqueUserIds);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const showAllData = () => {
    setFilteredData(data);
    setSelectedUserId('');
  };

  const filterByUserId = () => {
    if (selectedUserId) {
      const filtered = data.filter(post => post.userId === parseInt(selectedUserId));
      setFilteredData(filtered);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedUserId(e.target.value);
  };

  return (
    <div className='container  p-0'>
      <div className='mb-2 align-items-center '>
      <select className='text-center ms-3' value={selectedUserId} onChange={handleSelectChange}>
        <option value="" disabled>Select User ID</option>
        {userIds.map(userId => (
          <option key={userId} value={userId}>User ID {userId}</option>
        ))}
      </select>
      <button className='bg-warning fs-6 ms-2 me-auto' onClick={filterByUserId}>Show</button>
      <button className='bg-success fs-6 ms-2' onClick={showAllData}>Show All Data</button>

      </div>

      <table className='table table-bordered border-dark fs-3' border="2" cellPadding="5" cellSpacing="0">
        <thead k>
          <tr className='text-center'  >
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody  >
          {filteredData.map(post => (
            <tr className='' key={post.id}>
              <td className='text-center'>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;