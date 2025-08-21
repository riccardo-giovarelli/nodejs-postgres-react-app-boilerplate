export type TransactionsFordFieldType = 'amount' | 'direction' | 'category' | 'subcategory' | 'notes' | 'timestamp';

export interface TransactionsFormDataType {
  amount: string;
  direction: string;
  category: string;
  subcategory: string;
  timestamp: Date;
  notes: string;
}

export const transactionsFormDefaultData = {
  amount: '',
  direction: '',
  category: '',
  subcategory: '',
  timestamp: new Date(),
  notes: '',
};
