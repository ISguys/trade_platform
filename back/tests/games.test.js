/* eslint-disable no-undef */
const { v4 } = require('uuid');

const { setupTestEnv } = require('./testEnv');
const Game = require('../src/services/api/game/model');
require('dotenv').config();
const [fastify, pool] = setupTestEnv();


describe('Testing game', () => {
    beforeEach(async () => {});

    afterAll(async (done) => {
        // delete all test data
        const sql = `DELETE FROM "Games" WHERE
 title LIKE 'test%' AND description LIKE '%description%'`;
        await pool.query(sql);

        await pool.end();
        done();
    });

    test('it should add a new game to the database', async () => {
        // prepare test data
        const inputData = {
            steamPrice: 100,
            title: 'test title',
            steamLink: 'test url',
            imageLink: 'test image link',
            description: 'test description for adding',
        };

        // send request
        const response = await fastify.inject({
            url: '/game',
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${process.env.TOKEN}`,
            },
            payload: JSON.stringify(inputData),
        });

        // check data
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('success');
    });

    test('it should throw an error "Bad request", testing getAll', async () => {
        // prepare test data
        const inputData = {
            steamPrice: 100,
            title: 'test title',
            steamLink: 'test url',
            imageLink: 'test image link',
        };

        // send request
        const response = await fastify.inject({
            url: '/game',
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${process.env.TOKEN}`,
            },
            payload: JSON.stringify(inputData),
        });

        // check data
        expect(response.statusCode).toBe(400);
    });

    test('it should get all games from the database', async () => {
        const expectedData = await Game.getAll();
        // send request
        const response = await fastify.inject({
            url: '/game',
            method: 'GET',
        });
        // check data
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)[0].title).toBe(expectedData[0].title);
    });

    test('it should get game by id', async () => {
        // prepare test data
        const expectedData = await Game.getById('2');
        // send request
        const response = await fastify.inject({
            url: '/game/?gameId=2',
            method: 'GET',
        });
        // check data
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).title).toBe(expectedData.title);
    });

    test('it should return empty list', async () => {
        // send request
        const response = await fastify.inject({
            url: '/game/?gameId=000000',
            method: 'GET',
        });
        // check data
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('[]');
    });

    test('it should update game description in the database', async () => {
        // add test game
        const gameId = v4();
        const args = [
            gameId,
            100,
            'test title',
            'test url',
            'test image link',
            'test description for update',
        ];
        const sqlInsert =
            'INSERT INTO "Games"(game_id, steam_price, title,\
 steam_link, image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sqlInsert, args);

        // prepare test data
        const inputData = {
            fields: [{ description: 'changed description' }],
        };

        // send request
        const response = await fastify.inject({
            url: `/game/?gameId=${gameId}`,
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${process.env.TOKEN}`,
            },
            payload: JSON.stringify(inputData),
        });

        // check data
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('success');
    });

    test('it should delete game from the database', async () => {
        // add test game
        const gameId = v4();
        const args = [
            gameId,
            100,
            'test title',
            'test url',
            'test image link',
            'test description for deleting',
        ];
        const sqlInsert =
            'INSERT INTO "Games"(game_id, steam_price, title,\
 steam_link, image_link, description) VALUES ($1, $2, $3, $4, $5, $6)';
        await pool.query(sqlInsert, args);

        // send request
        const response = await fastify.inject({
            url: `/game/?gameId=${gameId}`,
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${process.env.TOKEN}`,
            },
        });

        // check data
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('success');
    });


});

