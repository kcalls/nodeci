import { helloWorld } from '../src/app';

test('helloWorld function returns "Hello, World!"', () => {
    expect(helloWorld()).toBe("Hello, World!");
});
