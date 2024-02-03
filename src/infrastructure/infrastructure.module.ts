import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Claim } from '../infrastructure/repositories/entities/claim';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sql',
      entities: [Claim],
    }),
    TypeOrmModule.forFeature([Claim]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class infrastructureModule {}
