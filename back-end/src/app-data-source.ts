import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",  // Name of the MySQL service in docker-compose.yml
    port: 3306,
    username: "user",
    password: "userpassword",
    database: "mydb",
    entities: ["src/models/*.ts"],  // Assuming the compiled JS files are in the dist directory
    logging: true,
    synchronize: true,
})

// Let's seed some data here...

