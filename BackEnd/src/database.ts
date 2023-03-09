import { createPool } from "mysql2/promise";

export async function Connection(){
    const connection = await createPool({
        host: ' localhost', // if is deployed, puth the url,ip o the data provided for the host services
        user: 'root',
        password:'',
        database: ' produucts_ferreteria',
        connectionLimit: 10
    });

    return connection;
}