import {
  IsNotEmpty,
  IsString,
  Length,
  IsUUID,
  IsInt,
  Min,
  IsArray,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  //@IsString()
  //@Length(10, 80)
  //@IsUUID()
  //@IsArray()
  //productId: string; 

  @IsInt()
  @Min(0)
  totalPrice: number;

  @IsString()
  comment: string;
}