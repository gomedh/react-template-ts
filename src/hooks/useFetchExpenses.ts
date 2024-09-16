import { useState, useEffect } from 'react';
import {EXPENSE_API_URL, ERROR_MSG, USER_NAME} from '../utils/constants'
import { fetchExpenses } from '../utils/api';

// Using interface for TypeSafety
const useFetchExpenses = () => {
  // To manage differene state variables
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    // To call the function to fetch data 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchExpenses(EXPENSE_API_URL, USER_NAME);
          setExpenses(data);
        } catch (err) {
          setError(new Error(ERROR_MSG));
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  // Returning all the states for UI component
    return { expenses, loading, error };
  };
  
  export default useFetchExpenses;