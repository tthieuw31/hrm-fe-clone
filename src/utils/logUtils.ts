export const logDebug = (obj: any) => {
  if (process.env.REACT_APP_ENV == 'DEV') {
    console.log('LOG DEV ENV' + JSON.stringify(obj));
  }
};
