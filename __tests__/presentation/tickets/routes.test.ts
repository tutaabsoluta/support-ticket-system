import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';
import { Severity, Status } from '@prisma/client';

describe('test routes.ts', () => {

    beforeAll(async () => {
        await testServer.start()
    });

    afterAll(() => {
        testServer.close()
    });

    beforeEach(async () => {
        await prisma.ticket.deleteMany();
    });

    const ticket1 = {
        author: 'Serg-Test',
        text: 'Hello world',
        severity: Severity.HIGH
    }
    const ticket2 = {
        author: 'Serg-Test',
        text: 'Hello world 2',
        severity: Severity.LOW
    }

    test('should return the tickets api/tickets', async () => {

        await prisma.ticket.createMany({
            data: [ticket1, ticket2]
        })
        // request pide la aplicacion que es el server
        const { body } = await request(testServer.app)
            .get('/api/tickets')
            .expect(200)

        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBe(2);
        expect(body[0].text).toBe(ticket1.text)
        expect(body[1].text).toBe(ticket2.text)

    });

    test('should return the ticket api/tickets/:id', async () => {

        const ticket = await prisma.ticket.create({
            data: ticket1
        });

        const { body } = await request(testServer.app)
            .get(`/api/tickets/${ticket.id}`)
            .expect(200);

        expect(body).toMatchObject(ticket1);


    });

    test('should return 404 not found api/tickets/:id', async () => {

        const id = 10000;

        const { body } = await request(testServer.app)
            .get(`/api/tickets/${id}`)
            .expect(404);

        expect(body).toEqual({
            error: `Ticket with id ${id} not found`
        });


    });

    test('should create a new ticket /api/tickets/', async () => {

        const { body } = await request(testServer.app)
            .post('/api/tickets')
            .send(ticket1)
            .expect(201)

        expect(body).toMatchObject(ticket1)

    });

    test('should return an error if text is not present /api/tickets/', async () => {

        const { body } = await request(testServer.app)
            .post('/api/tickets')
            .send({})
            .expect(400)

        expect(body).toEqual({
            error: 'The author property is required'
        })

    });
    test('should return an error if text is EMPTY /api/tickets/', async () => {

        const { body } = await request(testServer.app)
            .post('/api/tickets')
            .send({ text: '' })
            .expect(400)

        expect(body).toEqual({
            error: 'The author property is required'
        })

    });

    test('should return am updated a ticket /api/tickets/:id', async () => {

        // Para poder actualizar necesitamos un Ticket
        const ticket = await prisma.ticket.create({
            data: ticket1
        })

        const { body } = await request(testServer.app)
            .put(`/api/tickets/${ticket.id}`)
            .send({ text: 'Hola mundo update', createdAt: '10-10-2020' })
            .expect(200);

        expect(body).toEqual({
            id: expect.any(Number),
            author: 'Serg-Test',
            text: 'Hola mundo update',
            severity: 'HIGH',
            status: 'OPEN',
            createdAt: '2020-10-10T06:00:00.000Z'
        });
    });

    test('should return 404 if the ticket is not found', async () => {

        const { body } = await request(testServer.app)
            .put(`/api/tickets/1`)
            .send({ text: 'Hola mundo update', createdAt: '10-10-2020' })
            .expect(404);

        expect(body).toEqual({
            error: 'Ticket with id 1 not found'
        })

    });

    test('should return an updated ticket only date and severity properties', async () => {
        const ticket = await prisma.ticket.create({
            data: ticket1
        })

        const { body } = await request(testServer.app)
            .put(`/api/tickets/${ticket.id}`)
            .send({ createdAt: '10-10-2011', severity: Severity.MEDIUM })
            .expect(200)

        expect(body).toEqual({
            id: expect.any(Number),
            author: ticket.author,
            text: ticket.text,
            severity: Severity.MEDIUM,
            status: ticket.status,
            createdAt: '2011-10-10T06:00:00.000Z'
        })
    });

    test('should return an updated ticket only status property', async () => {
        
        const ticket = await prisma.ticket.create({
            data: ticket1
        })

        const { body } = await request(testServer.app)
            .put(`/api/tickets/${ticket.id}`)
            .send({ status: Status.IN_PROGRESS })
            .expect(200);


        expect(body).toEqual(
        {
            id: expect.any(Number),
            author: ticket.author,
            text: ticket.text,
            severity: ticket.severity,
            status: Status.IN_PROGRESS,
            createdAt: ticket.createdAt.toISOString()
        })
    });

    test('should delete a ticket at /api/ticket:id', async () => { 
        
        const ticket = await prisma.ticket.create({
            data: ticket1
        });

        const { body } = await request( testServer.app )
            .delete(`/api/tickets/${ ticket.id }`)
            .expect(200)

        expect( body ).toEqual(
            {
                id: expect.any( Number ),
                author: 'Serg-Test',
                text: 'Hello world',
                severity: 'HIGH',
                status: 'OPEN',
                createdAt: ticket.createdAt.toISOString()
              }
        )
    });

    test('should return 404 not found if the ticket doesnt exist /api/ticket:id', async () => { 
        
        const ticket = await prisma.ticket.create({
            data: ticket1
        });

        const { body } = await request( testServer.app )
            .delete(`/api/tickets/10000`)
            .expect(404)

        expect( body ).toEqual({
            error: 'Ticket with id 10000 not found'
        })
    });



});

