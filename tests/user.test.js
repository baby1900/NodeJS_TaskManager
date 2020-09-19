const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Michael Du',
    email: 'qiushidu@outlook.com',
    password: 'passqiushidu',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should singnup a new user', async () => {
    newUser = {
        name: 'Michael Du',
        email: 'qiushidu@gmail.com',
        password: 'passqiushidu'
    }
    const response = await request(app)
        .post('/users')
        .send(newUser)
        .expect(201)

    //Assert that the database has the user
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: newUser.name,
            email: newUser.email
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe(newUser.password)
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login user with wrong password', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'wrongpassword'
    }).expect(400)
})

test('Should not login non existence user', async () => {
    await request(app).post('/users/login').send({
        email: 'test@example.com',
        password: 'wrongpassword'
    }).expect(400)
})

test('Should get user profile', async () => {
    const response = await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for an unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    //Assert that the user has been deleted
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account for an unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})
