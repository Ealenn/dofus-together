import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './entities/claim';

@Injectable()
export class ClaimRepository {
  constructor(
    @InjectRepository(Claim)
    private usersRepository: Repository<Claim>,
  ) {}

  findAll(): Promise<Claim[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Claim | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
