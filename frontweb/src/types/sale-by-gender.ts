export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SaleByGender = [
  {
    gender: Gender;
    sum: number;
  }
];

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outro'
  };

  return textByGender[gender];
};
