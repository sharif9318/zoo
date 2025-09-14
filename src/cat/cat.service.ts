import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
 public getHello(): string {
    return 'Cat hello: myeow';
  }

  public introduce(): string { 
    return 'My name is Tom';
  }
}


