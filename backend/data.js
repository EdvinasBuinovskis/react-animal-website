import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    animals: [
        {
            name: 'John',
            category: 'Dog',
            image: '/images/a1.jpg',
            status: 'Atiduodamas',
            date: '2020-11-11',
            description: 'Nice dog',
            telNum: '123456'
        },
        {
            name: 'Petras',
            category: 'Cat',
            image: '/images/a2.jpg',
            status: 'Atiduodamas',
            date: '2020-11-11',
            description: 'Nice cat',
            telNum: '123456'
        },
        {
            name: 'Mr Dog',
            category: 'Dog',
            image: '/images/a3.jpg',
            status: 'Ieskomas',
            date: '2020-11-10',
            description: 'Nice dog',
            telNum: '123456'
        },
        {
            name: 'Mr. Jonas',
            category: 'Cat',
            image: '/images/a4.jpg',
            status: 'Atiduodamas',
            date: '2020-10-11',
            description: 'Nice cat',
            telNum: '123456'
        },
        {
            name: 'Dogge',
            category: 'Dog',
            image: '/images/a5.jpg',
            status: 'Atiduodamas',
            date: '2020-11-11',
            description: 'Nice dog',
            telNum: '123456'
        },
        {
            name: 'Jonas',
            category: 'Dog',
            image: '/images/a6.jpg',
            status: 'Atiduodamas',
            date: '2020-11-11',
            description: 'Nice dog',
            telNum: '123456'
        },
        {
            name: 'Peter',
            category: 'Dog',
            image: '/images/a7.jpg',
            status: 'Atiduodamas',
            date: '2020-11-11',
            description: 'Nice dog',
            telNum: '123456'
        },
    ],
};
export default data;