import { useContext } from 'react';
import { PortfolioDataContext } from './PortfolioDataContext';
import * as defaultData from '../data/portfolioData';

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    return defaultData;
  }
  return context;
};
