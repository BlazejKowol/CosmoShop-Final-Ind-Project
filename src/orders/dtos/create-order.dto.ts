import {
  IsNotEmpty,
  IsString,
  Length,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 80)
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 80)
  @IsUUID()
  clientId: string;
}