import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = (props) => {
    const { dispatch, currency  } = useContext(AppContext);

    const setField = value => dispatch({type: 'CHG_CURRENCY', payload: value });

    return (
        <div className="alert bg-success">
            <div className='row'>
                <div className="input-group" style={{ marginLeft: '2rem' }}>
                    <label 
                        className="text-white" 
                        htmlFor="inputGroupSelect05">Currency </label>

                    <select 
                        className="custom-select bg-success text-white" 
                        id="inputGroupSelect05" 
                        value={currency} 
                        onChange={(event) => setField(event.target.value)}>
                        <option value="$" name="dollar">$ Dollar</option>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="ruppee">₹ Ruppee</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CurrencySelect;