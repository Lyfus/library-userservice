import { Sequelize } from 'sequelize-typescript';
import { User } from './Entities/user/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'mysql',
                port: 3306,
                username: 'root',
                password: '',
                database: 'library_user',
                define: {
                    timestamps: false
                }
            });

            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize
        }
    }
]