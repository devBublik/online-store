import React from 'react';
import { useAppDispatch } from '../../helpers/hooks';
import { resetFilters } from '../../store/settings/SettingsSlice';
import InputRange from '../Input/InputRange';
import CategorySelect from '../Select/CategorySelect';
import Select from '../Select/Select';
import SortSelect from '../Select/SortSelect';
import ToggleFilter from '../ToggleFilter/ToggleFilter';

const Filters = () => {
    const dispatch = useAppDispatch()
    return (
        <div className='filters'>
            <div className="filters__header d-flex justify-content-between">
                <h3>Filters</h3>
                
            </div>
            {/* <form action=""> */}
                <ToggleFilter title='Price'>
                    <InputRange/>
                </ToggleFilter>
                <ToggleFilter title='Brand'>
                    <Select/>
                </ToggleFilter>
                <ToggleFilter title='Sort'>
                    <SortSelect/>
                </ToggleFilter>
                <ToggleFilter title='Categories'>
                    <CategorySelect/>
                </ToggleFilter>
                <button
                    className='filters__reset'
                    onClick={() => dispatch(resetFilters())}
                >
                    Reset filters
                </button>
            {/* </form> */}
        </div>
    );
};

export default Filters;