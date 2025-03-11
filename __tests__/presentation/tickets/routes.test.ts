import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';
import { Severity, Status } from '@prisma/client';

describe('test routes.ts', () => { 

    beforeAll( async() => {
        await testServer.start()
    });

    afterAll(() => {
        testServer.close()
    });

    beforeEach( async () => {
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
       const { body } = await request( testServer.app )
            .get('/api/tickets')
            .expect(200)

        expect( body ).toBeInstanceOf( Array );
        expect( body.length ).toBe(2);
        expect( body[0].text ).toBe( ticket1.text )
        expect( body[1].text ).toBe( ticket2.text )
        
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
            .get(`/api/tickets/${ id }`)
            .expect(404);
    
        expect(body).toEqual({
            error: `Ticket with id ${ id } not found`
        }); 
    

      });
 });