export const VERSION = 'Ver2.0.2';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const COMMAND_CALC = {
  NEXT: 'next',
  SCORE: 'score',
  ANSWER: 'answer',
};

export const CNDT = {
  ADD: 0,
  MINUS: 1,
  BUG: 4,
};

export const isIOS = () => {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0) {
    return true;
  }

  return false;
};
