import {SerializerClass} from './serializer-class';

describe('An utility class for data serialization and functions in particular', () => {
  it('Should constructs without any parameters passed into', () => {
    expect(() => new SerializerClass()).not.toThrow();
  });
  it('Should serialize and parse data', async () => {
    const expectedGlobalValueName = 'expectedGlobalValueName';
    const expectedGlobalValue = 'expectedGlobalValue';
    (window as any)[expectedGlobalValueName] = expectedGlobalValue;
    const object = {
      a: 1,
      b: '2',
      c: null,
      d: undefined,
      e: () => {
        (window as any)['expectedGlobalValueName'] = 'not_expectedGlobalValue';
        return new Promise(res => res('eFunctionReturnedValueExpected'));
      },
      f: function () {
        (window as any)['expectedGlobalValueName'] = 'not_expectedGlobalValue';
        return 'fFunctionReturnedValueExpected';
      },
      g() {},
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
    expect((parsedResult as any).g).toEqual(expect.stringContaining(''));
    expect((window as any)[expectedGlobalValueName]).toBe(expectedGlobalValue);
    await expect((parsedResult as any).e()).resolves.toBe(
      'eFunctionReturnedValueExpected'
    );
    expect((parsedResult as any).f()).toBe('fFunctionReturnedValueExpected');
    expect((window as any)[expectedGlobalValueName]).toBe(expectedGlobalValue);
  });
});
