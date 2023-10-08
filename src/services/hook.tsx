import axios from 'axios';
import {useState, useEffect, ReactNode } from 'react'
import {useAuth} from 'contexts/AuthContext';
import { useRouter } from 'next/router';

export const useFetch =(url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('Loading.....');
        setData(null);
        setError(null);

        const source = axios.CancelToken.source();
        axios.get(url, { cancelToken: source.token })
            .then(res => {
                setLoading(false);
                res && res.data && setData(res.data);
            })
            .catch(err => {
                setLoading(false);
                setError('An error occured');
            })
            return () => {
                source.cancel();
            }
    }, [url])
    return { data, loading, error }
}


export const ProtectedRoute =({children}: any)  => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/auth'); // Replace with your authentication page route
      }
    }, [isAuthenticated]);
  
    return children;
  }