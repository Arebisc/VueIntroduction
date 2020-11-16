import { Foo } from './../services/bloggingModule/Foo';
import { FooInterface } from './../abstract/bloggingModule/FooInterface';
import { ContainerModule, interfaces } from 'inversify';

export const BloggingModule = new ContainerModule((bind: interfaces.Bind) => {
    bind(nameof<FooInterface>()).to(Foo);
});
