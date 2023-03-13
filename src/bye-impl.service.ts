import { Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class ByeImpl implements Test {
  getHello(): string {
    return 'Bye World!';
  }
}
