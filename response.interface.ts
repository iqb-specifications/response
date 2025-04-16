export type ResponseStatusType = 'UNSET' | 'NOT_REACHED' | 'DISPLAYED' | 'VALUE_CHANGED' |
    'DERIVE_ERROR' | 'CODING_COMPLETE' | 'NO_CODING' | 'INVALID' | 'CODING_INCOMPLETE' | 'CODING_ERROR' |
    'PARTLY_DISPLAYED' | 'DERIVE_PENDING' | 'INTENDED_INCOMPLETE' | 'CODE_SELECTION_PENDING';
export const responseStatesInOrder = ['UNSET', 'NOT_REACHED', 'DISPLAYED', 'VALUE_CHANGED', 'INVALID',
  'DERIVE_ERROR', 'CODING_COMPLETE', 'PARTLY_DISPLAYED', 'DERIVE_PENDING', 'NO_CODING', 'CODE_SELECTION_PENDING',
  'CODING_INCOMPLETE', 'CODING_ERROR'];

export type ResponseValueSingleType = null | string | number | boolean;
export type ResponseValueType = ResponseValueSingleType | ResponseValueSingleType[];

export interface CodesType {
  id: number,
  parameter?: string
}

export interface Response {
  id: string,
  status: ResponseStatusType;
  value: ResponseValueType;
  subform?: string,
  code?: number;
  codes?: CodesType[];
  score?: number
}

