import { injectable } from 'inversify';
import { FooInterface } from './../../abstract/bloggingModule/FooInterface';

@injectable()
export class Foo implements FooInterface {
    public bar(): void {
        console.log('Bar from foo');
    }
}
