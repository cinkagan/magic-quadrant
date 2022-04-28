import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ICompany} from '../models/Company';

const storageKey = '@companyList';

interface IAppContext {
  companyList: ICompany[];
  addCompany: (company: ICompany) => void;
  updateCompany: (company: ICompany) => void;
  removeCompany: (companyId: number) => void;
}

type TApp = {
  children: ReactNode;
};

const AppContext = createContext<IAppContext>({
  companyList: [],
  addCompany: () => {},
  updateCompany: () => {},
  removeCompany: () => {},
});

const AppProvider = (props: TApp) => {
  const {children} = props;
  const [companyList, setCompanyList] = useState<ICompany[]>([]);

  useEffect(() => {
    const list = localStorage.getItem(storageKey);
    if (list) setCompanyList(JSON.parse(list));
  }, []);

  const setDataToStorage = (list?: ICompany[]) => {
    localStorage.setItem(storageKey, JSON.stringify(list || companyList));
  };

  const addCompany = (company: ICompany) => {
    const listTemp = [...companyList, company];
    setCompanyList(listTemp);
    setDataToStorage(listTemp);
  };

  const updateCompany = (company: ICompany) => {
    const companyTempIndex = companyList.findIndex(
      item => item.id === company.id,
    );
    if (companyTempIndex > -1) {
      const companyTemp = {...company};
      const listTemp = [...companyList];

      if (company.ability > 100) companyTemp.ability = 100;
      if (company.ability < 0) companyTemp.ability = 0;

      if (company.vision > 100) companyTemp.vision = 100;
      if (company.vision < 0) companyTemp.vision = 0;

      listTemp[companyTempIndex] = {...companyTemp};
      setCompanyList(listTemp);
      setDataToStorage(listTemp);
    }
  };

  const removeCompany = (companyId: number) => {
    const listTemp = companyList.filter(company => company.id !== companyId);
    setCompanyList(listTemp);
    setDataToStorage(listTemp);
  };

  return (
    <AppContext.Provider
      value={{companyList, addCompany, updateCompany, removeCompany}}
    >
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider};

export const useApp = () => useContext(AppContext);
