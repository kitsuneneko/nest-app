import { Module } from '@nestjs/common';
import { EncodingHelper } from './encoding.helper';


@Module({
  providers: [EncodingHelper],
  exports: [EncodingHelper]
})
export class SharedModule {}
