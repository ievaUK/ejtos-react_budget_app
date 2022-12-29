import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Store states
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    
    const changeBudget = (e) => {
        // Check for upper limit
        if (e > 20000){
            alert(`Budget cannot exceed ${currency} 20 000`);
            return;
        } 

        if (e < expenses ) {
            alert('New budget cannot be lower than allocated funds');
            return;
        }
        // update state
        dispatch({ type: `SET_BUDGET`, payload: e });
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input 
                    type="number" 
                    value={budget}
                    id="budget"
                    step="10"
                    max="20000"
                    onChange={(event) => changeBudget(event.target.value)} />
            </span>
        </div>
    );
};

export default Budget;
