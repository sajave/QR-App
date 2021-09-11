export const GET_QRDATA = 'GET_QRDATA';
export const PUT_QRDATA = 'PUT_QRDATA';

export function getQRData() {
  return ({
    type: GET_QRDATA,
  })
};

export function putQRData(newData, dateScanned) {
  return ({
    type: PUT_QRDATA,
    payload: { newData, dateScanned }
  })
};