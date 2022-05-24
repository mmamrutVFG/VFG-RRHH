import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly userRepository: Repository<Person>,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    const person = this.userRepository.create(createPersonDto);
    return this.userRepository.save(person);
  }

  findAll() {
    return this.userRepository.find();
  }
}
