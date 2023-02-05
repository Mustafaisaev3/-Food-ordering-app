import * as yup from 'yup'

export const CheckoutSchema = yup.object().shape({
    cardholder: yup.string().required('Cardholder name is required!'),
    cardNumber: yup.number().required('Card Number is required!'),
    expirationDate: yup.string().required('Expiration Date is required!'),
    CVV: yup.string().test('len', 'Must be exactly 3 characters', (val) => val?.length === 3).required('Expiration Date is required!'),
})