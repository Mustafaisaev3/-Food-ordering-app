type userType = {
    id: number,
    username: string,
    nickname: string,
    photo: string
}

export let usersData = [
    {
        id: 101,
        username: 'Alfredo Elliott',
        nickname: 'Alfredo',
        photo: 'assets/images/chat/users/user.png'
    },
    {
        id: 102,
        username: 'Konnor Guzman',
        nickname: 'Konnor',
        photo: 'assets/images/chat/users/avatar-2.jpg'
    },
    {
        id: 103,
        username: 'Travis Fuller',
        nickname: 'Travis',
        photo: 'assets/images/chat/users/avatar-3.jpg'
    },
    {
        id: 104,
        username: 'Derrick Simmons',
        nickname: 'Derrick',
        photo: 'assets/images/chat/users/avatar-4.jpg'
    },
    {
        id: 105,
        username: 'Corey Evans',
        nickname: 'Corey',
        photo: 'assets/images/chat/users/avatar-5.jpg'
    },
    {
        id: 106,
        username: 'Anthony Jensen',
        nickname: 'Anthony',
        photo: 'assets/images/chat/users/avatar-6.jpg'
    },
    {
        id: 107,
        username: 'Lance Tucker',
        nickname: 'Lance',
        photo: 'assets/images/chat/users/avatar-7.jpg'
    },
]

export const getUser = (userId: number): userType => {
    let userData = {
        id: 101,
        username: 'Alfredo Elliott',
        nickname: 'Alfredo',
        photo: 'assets/images/user.png'
    }
    usersData.map((user) => {
        if(user.id === userId){
            userData = user
        }
    })

    return userData
}

export const Conversations = [
    {
        id: 201,
        users: [101, 102],
        messages: [
            {
                text: 'Hello My Dear. Lorem ipsum dolor sit amet, consectetur.',
                sender: 102
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.',
                sender: 101
            },
            {
                text: 'And that’s why a 15th century',
                sender: 101
            },
        ]
    },
    {
        id: 202,
        users: [101, 103],
        messages: [
            {
                text: 'Hello My Dear. Lorem ipsum dolor sit amet, consectetur. ',
                sender: 103
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.',
                sender: 101
            },
            {
                text: 'And that’s why a 15th century',
                sender: 101
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius. ',
                sender: 103
            },
        ]
    },
    {
        id: 203,
        users: [101, 104],
        messages: [
            {
                text: 'Hello My Dear. Lorem ipsum dolor sit amet, consectetur. ',
                sender: 104
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.',
                sender: 101
            },
            {
                text: 'And that’s why a 15th century',
                sender: 101
            },
            {
                text: 'Ei eum populo dictas, ad sed tempor minimum voluptatibus, ',
                sender: 104
            },
            {
                text: 'No mei stet periculis consequat, agam nostro ',
                sender: 101
            },
            {
                text: 'at has eius harum  ',
                sender: 101
            },
            {
                text: 'Recusabo mandamus cum ex, ius unum nibh an, usu liber oratio liberavisse ea. ',
                sender: 104
            },
            {
                text: 'Ocurreret rationibus intellegebat eu eos,',
                sender: 101
            },
            {
                text: 'Veri dolorum cu ius. Vim id nullam putent invidunt. ',
                sender: 101
            },
        ]
    },
]