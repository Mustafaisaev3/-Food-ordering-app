
export interface Department {
    id: string,
    title: string,
    description: string,
    img: string,
    address: string,
    timetable: {
        from: string,
        to: string
    },
    coordinates: {
        lat: number, 
        lng: number
    }
}

export interface DepartmentsState {
    departments: Department[],
    activeDepartment: Department | undefined
}