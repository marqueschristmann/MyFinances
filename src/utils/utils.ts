export const FormatMoney = (money: string): string => {
  const formatedValue = Number(money).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatedValue;
};
