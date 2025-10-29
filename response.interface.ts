export type ResponseStatusType = 'UNSET' | 'NOT_REACHED' | 'DISPLAYED' | 'VALUE_CHANGED' |
    'DERIVE_ERROR' | 'CODING_COMPLETE' | 'NO_CODING' | 'INVALID' | 'CODING_INCOMPLETE' | 'CODING_ERROR' |
    'PARTLY_DISPLAYED' | 'DERIVE_PENDING' | 'INTENDED_INCOMPLETE';
export const responseStatesInOrder = ['UNSET', 'NOT_REACHED', 'DISPLAYED', 'VALUE_CHANGED', 'INVALID',
  'DERIVE_ERROR', 'CODING_COMPLETE', 'PARTLY_DISPLAYED', 'DERIVE_PENDING', 'NO_CODING',
  'CODING_INCOMPLETE', 'CODING_ERROR'];

export const responseStatesNumericMap = [
  {
    key: 0,
    value: "UNSET"
  },
  {
    key: 1,
    value: "NOT_REACHED"
  },
  {
    key: 2,
    value: "DISPLAYED"
  },
  {
    key: 3,
    value: "VALUE_CHANGED"
  },
  {
    key: 4,
    value: "DERIVE_ERROR"
  },
  {
    key: 5,
    value: "CODING_COMPLETE"
  },
  {
    key: 6,
    value: "NO_CODING"
  },
  {
    key: 7,
    value: "INVALID"
  },
  {
    key: 8,
    value: "CODING_INCOMPLETE"
  },
  {
    key: 9,
    value: "CODING_ERROR"
  },
  {
    key: 10,
    value: "PARTLY_DISPLAYED"
  },
  {
    key: 11,
    value: "DERIVE_PENDING"
  },
  {
    key: 12,
    value: "INTENDED_INCOMPLETE"
  }
];

export type ResponseValueSingleType = null | string | number | boolean;
export type ResponseValueType = ResponseValueSingleType | ResponseValueSingleType[];

export interface Response {
  id: string,
  status: ResponseStatusType;
  value: ResponseValueType;
  subform?: string,
  code?: number;
  score?: number
}

