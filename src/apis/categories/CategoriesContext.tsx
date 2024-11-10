import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import CategoriesApi from './CategoriesApi';
import { CategoriesData } from './CategoriesApi';
import {
  getCategoriesFromLocalStorage,
  fetchAndStoreCategories,
} from './CategoriesServices';

interface CategoriesContextType {
  data: CategoriesData | null;
  isLoading: boolean;
  error: Error | null;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const CategoriesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<CategoriesData | null>(
    getCategoriesFromLocalStorage()
  );
  const [isLoading, setIsLoading] = useState<boolean>(!data); // Chỉ load nếu không có dữ liệu
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!data) {
      // Nếu chưa có dữ liệu, fetch từ API và lưu vào localStorage
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await CategoriesApi.getCategoriesData();
          setData(response.data);
          fetchAndStoreCategories(); // Lưu vào localStorage
          setIsLoading(false);
        } catch (error: any) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [data]);

  return (
    <CategoriesContext.Provider value={{ data, isLoading, error }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};
