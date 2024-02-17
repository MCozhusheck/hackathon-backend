import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ethers } from 'ethers';
import { CreatePermitDto } from './dto/create-permit.dto';
import { UpdatePermitDto } from './dto/update-permit.dto';
import { Permit } from './entities/permit.entity';
import { domain, types } from './permit.const';

@Injectable()
export class PermitsService {
  constructor(
    @InjectRepository(Permit)
    private readonly permitRepository: MongoRepository<Permit>,
  ) {}

  private validatePermit(input: CreatePermitDto) {
    const { signature } = input;
    const sig = ethers.utils.splitSignature(signature);
    const recovered = ethers.utils.verifyTypedData(domain, types, input, sig);
    return recovered;
  }
  async create(input: CreatePermitDto): Promise<Permit> {
    this.validatePermit(input);
    const permit = this.permitRepository.create(input);
    return await this.permitRepository.save(permit);
  }

  async findAll(): Promise<Permit[]> {
    return await this.permitRepository.find();
  }

  async findOne(id: number): Promise<Permit> {
    return await this.permitRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePermitDto: UpdatePermitDto): Promise<Permit> {
    this.validatePermit(updatePermitDto);
    await this.permitRepository.update(id, updatePermitDto);
    return await this.permitRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.permitRepository.delete(id);
  }
}
