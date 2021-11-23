import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const search = async (place: string, drop: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ place, drop }),
    credentials: 'include',
  };
  return await fetch(`/auth/search`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default search;
