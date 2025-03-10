import request from 'supertest';
import { testServer } from '../../test-server';

describe('test routes.ts', () => { 

    beforeAll( async() => {
        await testServer.start()
    })

    test('should return the tickets api/tickets', async () => { 
        
       const response = await request( testServer.app )
            .get('/api/tickets')
            // .expect(200)

        console.log(response.body)
     });
 });