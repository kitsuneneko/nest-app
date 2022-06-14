// import { Role } from "src/roles/entities/Role";
// import { User } from "src/users/entities/User";
import { MigrationInterface, QueryRunner } from "typeorm"

export class seed1655232141194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        // await queryRunner.query(`INSERT INTO user (username ,password, email, role_id) VALUES ('superuser', 'hardPassword', 'admin@mail.com', 1);`);

        // await queryRunner.query(`INSERT INTO user (username ,password, email, role_id) VALUES ('randomUser', 'password', 'user@mail.com', 2);`);

        await queryRunner.query("INSERT INTO role (id,role_name) VALUES (1,'admin');");

        await queryRunner.query("INSERT INTO role (id, role_name) VALUES (2,'user');");

        // await queryRunner.manager.save(
        //     queryRunner.manager.create<User>(User, {
        //       username: 'admin',
        //       password: 'hardPassword',
        //       email: 'admin@mail.com',
        //       roleId: 1,
        //     }),
        // );
        // await queryRunner.manager.save(
        //     queryRunner.manager.create<User>(User, {
        //       username: 'user1',
        //       password: 'password',
        //       email: 'user1@mail.com',
        //       roleId: 2,
        //     }),
        // );

        // await queryRunner.manager.save(
        //     queryRunner.manager.create<User>(User, {
        //       username: 'user2',
        //       password: 'password',
        //       email: 'user2@mail.com',
        //       roleId: 2,
        //     }),
        // );

        // await queryRunner.manager.save(
        //     queryRunner.manager.create<User>(User, {
        //       username: 'user3',
        //       password: 'password',
        //       email: 'user3@mail.com',
        //       roleId: 2,
        //     }),
        // );

        // await queryRunner.manager.save(
        //     queryRunner.manager.create<Role>(Role, {
        //       roleName: 'admin',
        //     }),
        // );

        // await queryRunner.manager.save(
        //     queryRunner.manager.create<Role>(Role, {
        //       roleName: 'user',
        //     }),
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM user`);
        await queryRunner.query(`DELETE * FROM role`);
    }

}
