import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import * as cafesAction from '../../features/cafes/cafes';
import Pagination from '../../components/Pagination/Pagination';

const DiscoverPage: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { cafes } = useAppSelector((state: RootState) => state.cafes);

  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (query) {
      dispatch(cafesAction.init(query));
    } else {
      dispatch(cafesAction.fetchTopCafes());
    }
  }, [query, dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCafes = cafes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cafes.length / itemsPerPage);

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

            <span className="discover__search-rating">Rating</span>

            <div className="discover__search-block"></div>
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
            {currentCafes.map(item => (
              <li className="discover__item" key={item.unique_id}>
                <Card cafe={item} />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverPage;
