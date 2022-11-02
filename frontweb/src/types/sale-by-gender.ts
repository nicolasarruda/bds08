export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SaleByGender = [
  {
    gender: Gender;
    sum: number;
  }
];
