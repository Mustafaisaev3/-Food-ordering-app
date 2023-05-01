import * as yup from 'yup'

export const UserAccountSchema = yup.object().shape({
    userName: yup.string().required('User name is required!'),
    email: yup.string().email().required('Email is required!'),
    company: yup.string(),
    first_name: yup.string().required('First name is required!'),
    last_name: yup.string().required('Last name is required!'),
    address: yup.string(),
    city: yup.string(),
    postal_code: yup.string(),
    country: yup.string(),
    about_me: yup.string(),
    password: yup.string().required('No password provided.').min(6, 'Password is too short - should be 6 chars minimum.'),
    website: yup.string(),
    bio: yup.string(),
})