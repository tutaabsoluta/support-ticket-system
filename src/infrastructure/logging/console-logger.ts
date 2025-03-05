import colors from 'colors';
import { ILogger } from './logger';

export class ConsoleLogger implements ILogger {

    info( message: string ) {
        console.log( colors.cyan(`[INFO] ${ message }`) );
    };

    warning( message: string ) {
        console.log( colors.yellow(`[WARNING] ${ message }`) );
    };

    error( message: string ) {
        console.log( colors.red(`[ERROR] ${ message }`) );
    };
};