type FormatCurrencyType = {
  (value: number, format: string): void;
}

const formatCurrency: FormatCurrencyType = (value: number, currency: string): string => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: `${currency}`
  });
}

export default formatCurrency;