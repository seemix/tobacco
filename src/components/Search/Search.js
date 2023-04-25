import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../store/search';
import { closeMenu, showHideItem } from '../../store/appearance';
import ItemCard from '../ItemCard/ItemCard';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(search(q));
        dispatch(closeMenu());
        dispatch(showHideItem());
    }, [q, dispatch]);
    const { results } = useSelector(state => state.searchStore);
    return (
        <div className={'main_container'}>
            <h2>Search results {`"${q}"`}</h2>

            <div className={'items_wrapper'}>
                {results.length > 0 &&
                    results.map(item => <ItemCard key={item._id} product={item}/>)
                }
            </div>
        </div>
    );
};

export default Search;