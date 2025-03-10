import { envs } from '../src/config/envs';
import { Server } from '../src/presentation/server';


jest.mock('../src/presentation/server');

describe('test app.ts', () => { 

    test('should called server with arguments and the start method', async () => { 
        
        await import('../src/app');

        expect(Server).toHaveBeenCalledTimes(1);

        expect(Server).toHaveBeenCalledWith({
            port: envs.PORT,
            routes: expect.any(Function)
        });

        expect(Server.prototype.start).toHaveBeenCalled();

     });
 });