import { Injectable } from '@nestjs/common';
import { Test } from './test.interface';

@Injectable()
export class TestImpl implements Test {
  getHello(): string {
    return 'Hello World!';
  }
}
