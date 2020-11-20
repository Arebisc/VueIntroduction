import { FooInterface } from '@/abstract/bloggingModule/FooInterface';
import { $inject } from '@vanroeybe/vue-inversify-plugin';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    private sampleMessage = 'message';

    @$inject(nameof<FooInterface>())
    private readonly foo!: FooInterface;

    private callBar() {
        this.foo.bar();
    }

    private get reversedMessage() {
        return this.sampleMessage
            .split('')
            .reverse()
            .join('');
    }

    private changeMessage() {
        this.sampleMessage = 'other';
    }
}
