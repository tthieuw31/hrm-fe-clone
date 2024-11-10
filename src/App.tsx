import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesCustom from './route/RoutesCustom';
import { ReactQueryDevtools } from 'react-query/devtools';
import React, { useEffect } from 'react';
import { CategoriesProvider } from 'apis/categories/CategoriesContext';
import {
  fetchAndStoreCategories,
  getCategoriesFromLocalStorage,
} from 'apis/categories/CategoriesServices';
const queryClient = new QueryClient();
function App(): React.ReactElement {
  useEffect(() => {
    const categories = getCategoriesFromLocalStorage();
    if (!categories) {
      fetchAndStoreCategories();
    }
  }, []);

  return (
    <CategoriesProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <RoutesCustom />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </CategoriesProvider>
  );
}

export default App;
