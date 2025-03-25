import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    FRONTEND_URL: get('FRONTEND_URL').required().asUrlString(),
    PORT: get('PORT').required().asPortNumber(),
};