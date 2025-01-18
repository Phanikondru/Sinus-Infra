import { useState, useEffect } from 'react';

interface FormData {
  plotSize: string;
  builtUpArea: string;
}

export const useBudgetCalculator = () => {
  const [formData, setFormData] = useState<FormData>({
    plotSize: '',
    builtUpArea: ''
  });

  const [totalCost, setTotalCost] = useState(0);
  const baseRate = 2222;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (formData.builtUpArea) {
      const cost = parseFloat(formData.builtUpArea) * baseRate;
      setTotalCost(isNaN(cost) ? 0 : cost);
    } else {
      setTotalCost(0);
    }
  }, [formData.builtUpArea]);

  return {
    formData,
    totalCost,
    handleChange
  };
};