import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SearchContextType {
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchActive: false,
  setSearchActive: () => {},
});

export const SearchContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType =>
  useContext(SearchContext);
