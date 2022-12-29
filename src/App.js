import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import CurrencySelect from './components/CurrencySelect';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                
                <h1 className="py-3">
                    Company's budget allocation
                </h1>
            
                <div className='row g-3'>
                    <div className="col-auto">
                        <Budget/>
                    </div>
                    <div className="col-auto">
                        <Remaining />                        
                    </div>
                    <div className="col-auto">
                        <ExpenseTotal />
                    </div>
                    <div className="col-auto">
                        <CurrencySelect />
                    </div>
                </div>
                
                <div>
                    <h2>Allocation</h2>
                    <ExpenseList/>
                </div>
            
                <h2 className="py-2">Change Allocation</h2>
                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;