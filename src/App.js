import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                {/* Add the code here to add the components          */}
                <h1 class="py-3">Company's budget allocation</h1>
                <div class='row'>
                    <Budget/>
                    <Remaining />
                    <ExpenseTotal />
                </div>
                <div>
                    <h2>Allocation</h2>
                    <ExpenseList/>
                </div>
            
                <h2 class="py-2">Change Allocation</h2>
                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;