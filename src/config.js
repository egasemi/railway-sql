export const PORT = process.env.PORT || 3000

export const DB_CONFIG = {
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_NAME || 3306,
    database: process.env.DB_NAME || 'usersdb'
}