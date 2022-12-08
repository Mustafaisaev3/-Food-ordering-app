import * as yup from 'yup'

export const AddProductSchema = yup.object().shape({
    title: yup.string().required('Required'),
    description: yup.string().required('Required'),
    price: yup.number().positive().integer().required('Required'),
    category: yup.string().required('Required'),
    imageUrl: yup.string().required('Required'),
})

export const UpdateProductSchema = yup.object().shape({
    title: yup.string().required('Required'),
    description: yup.string().required('Required'),
    price: yup.number().positive().integer().required('Required'),
    category: yup.string().required('Required'),
    imageUrl: yup.string().required('Required'),
})