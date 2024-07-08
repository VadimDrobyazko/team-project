import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import * as cafesAction from '../../features/cafes/cafes';

const DiscoverPage: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { cafes } = useAppSelector((state: RootState) => state.cafes);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (query) {
      dispatch(cafesAction.init(query));
    }
  }, [query, dispatch]);

  return (
    <section className="section discover">
      <div className="container">
        <div className="discover__wrapper">
          <h1 className="discover__title">Find place</h1>

          <div className="discover__search">
            <input
              type="search"
              className="discover__input"
              placeholder="Search"
            />
          </div>

          <div className="discover__sort">
            <span>Sort by:</span>

            <ul className="discover__sort-list">
              <li className="discover__sort-item">
                <input type="checkbox" />
              </li>

              <li className="discover__sort-item">Highest Rating</li>
            </ul>

            <ul className="discover__sort-list">
              <li className="discover__sort-item">
                <input type="checkbox" />
              </li>

              <li className="discover__sort-item">Popular</li>
            </ul>
          </div>

          <ul className="discover__list">
            {cafes.map(item => (
              <li className="discover__item" key={item.unique_id}>
                <Card cafe={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPage;
