import './main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Main = () => {
  const [data, setData] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [result, setResult] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [refreshData, setRefreshData] = useState(false);

  const getData = async () => {
    await axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?fbclid=IwAR0jMEtoFcxupYVEygmuwQt0SrSpgZrqLfyH2vJr165eLayCkIg1L2Xj75w`
      )
      .then((res) => {
        const data = res.data;
        setSearchFilter(data);
        setData(data);
        setLoadingData(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setLoadingData(true);
    getData();
  }, [refreshData]);

  useEffect(() => {
    const results = searchFilter?.filter((res) =>
      res.title.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div className='container '>
      <div className='content'>
        <div className='content-search'>
          <div className='search-title'>
            <input
              className='text'
              type='text'
              placeholder='Search by title ... '
              value={result}
              onChange={onChange}
            />
            <button
              className='button'
              type='button'
              onClick={() => setRefreshData(!refreshData)}
            >
              Refresh
            </button>
          </div>
        </div>
        <div className='content-title'>
          <ul className='part'>
            {loadingData ? (
              <h2>Loading</h2>
            ) : (
              data?.map((item, index) => (
                <li key={index}>
                  <h2>{item.title}</h2>
                  <div className='content-item'>{item.body}</div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Main;
