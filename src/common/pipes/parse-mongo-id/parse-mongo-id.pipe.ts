import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadGatewayException } from '@nestjs/common/exceptions';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform { 

  transform(value: string, metadata: ArgumentMetadata) {
    // console.log({ value, metadata });

    if ( !isValidObjectId(value) ){
      throw new BadGatewayException(`${ value } is not a valid MongoId`)
    }
    return value;
  }
}
