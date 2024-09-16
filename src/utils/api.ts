/* eslint-disable @typescript-eslint/no-explicit-any */
import {ERROR_MSG_2} from '../utils/constants'

export const fetchExpenses = async (url: string, username: string): Promise<any> => {
  // Need to pass the header as per the API documentation
    const headers = {
      "Content-Type": "application/json",
      "Username": username,
    };
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(ERROR_MSG_2);
    }
    
    return await response.json();
  };
  