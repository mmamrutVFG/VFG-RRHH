import { IsDate, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly lastname: string;

  @IsDate()
  readonly dateOfBirth: string;
}
