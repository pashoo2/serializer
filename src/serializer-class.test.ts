import {SerializerClass} from './serializer-class';

describe('An utility class for data serialization and functions in particular', () => {
  it('Should constructs without any parameters passed into', () => {
    expect(() => new SerializerClass()).not.toThrow();
  });
  it('Should serialize and parse data', () => {
    const object = {
      a: 1,
      b: '2',
      c: null,
      d: undefined,
      e: () => {
        return 'eFunctionReturnedValueExpected';
      },
      f() {
        return 'fFunctionReturnedValueExpected';
      },
    };
    const instance = new SerializerClass();
    const stringifiedObject = instance.stringify(object);
    expect(stringifiedObject).toEqual(expect.stringContaining(''));
    const parsedResult = instance.parse(stringifiedObject);
    expect(parsedResult).toEqual(
      expect.objectContaining({
        a: object.a,
        b: object.b,
        c: object.c,
      })
    );
    expect((parsedResult as any).e).toEqual(expect.any(Function));
    expect((parsedResult as any).f).toEqual(expect.any(Function));
    expect((parsedResult as any).e()).toBe('eFunctionReturnedValueExpected');
    expect((parsedResult as any).f()).toBe('fFunctionReturnedValueExpected');
  });
});
