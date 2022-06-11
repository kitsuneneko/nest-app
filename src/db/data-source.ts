import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../users/entities/User"

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: null,
//     database: "userdb",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })

// AppDataSource.initialize()
//     .then(() => {
//         console.log('Success!');
//     })
//     .catch((error) => console.log(error))


export const AppDataSource = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: null,
        database: "userdb",
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
