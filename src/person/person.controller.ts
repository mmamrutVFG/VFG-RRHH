import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }
}
