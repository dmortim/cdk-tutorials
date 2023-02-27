import http from 'http';
import { Sequelize } from 'sequelize';
import request from 'supertest';
import app from '../../src/app';
import User from '../../src/models/user.model';

describe('User API', () => {
  beforeAll(async () => {
    await User.sync({ force: true })
  });

  afterAll(async () => {
    await User.destroy({ truncate: true })
  });

  describe('POST /user', () => {
    it('should create a new user', async () => {
      expect(1).toBe(1)
    });
  })

  describe('POST /user', () => {
    it('should create a new user', async () => {
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+61123456789'
      };

      const response = await request(app)
        .post('/api/v1/user')
        .send(userData)
        .expect(201);

      expect(response.body).toEqual(expect.objectContaining({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
      }));

      const user = await User.findOne({ where: { email: userData.email } });
      
      expect(user?.dataValues.firstName).toEqual('John');
    });
  });
});
