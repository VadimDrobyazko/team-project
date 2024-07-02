import React, { useState } from 'react';
import { Cafe } from '../../types/Cafe';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

import * as cafesAction from '../../features/cafes/cafes';
import Card from '../../components/Card/Card';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();

  const { cafes, loaded, hasError } = useAppSelector(
    (state: RootState) => state.cafes,
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(cafesAction.init(query));
  };

  return (
    <div>
      <h1>Cafe Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter search query (e.g., cafe near Golden Gate)"
      />
      <button onClick={handleSearch} disabled={!query || !loaded}>
        {loaded ? 'Search Cafes' : 'Loading...'}
      </button>
      {hasError && <p>Error fetching cafes. Please try again.</p>}
      <ul className="list">
        {cafes.map((cafe: Cafe) => (
          <Card key={cafe.fsq_id} cafe={cafe} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
