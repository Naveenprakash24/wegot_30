import * as moment from 'moment';
  
export const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
export const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
export const perOfmonthStart = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
export const perOfmonthEnd = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');  
export const yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');
export const currentDay = moment().format('YYYY-MM-DD');

