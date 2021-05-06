export function curry(instance: any, f: Function, ...params: any[]) {
    const args = params;
    const wrapper = function curry(...params: any[])
    {
        return f.bind(instance)(args.concat(params));
    }
    return wrapper;
}

export function shallowCopyArray(array: any[]) {
    const copy = [];
    return array.map((value) => copy.push(value));
}

//type Params<F extends (...args: any[]) => any> =
//    F extends ((...args: infer A) => any) ? A : never

//type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never

//type Tail<T extends any[]> =
//    ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
//    ? TT : never
//type HasTail<T extends any[]> = T extends ([] | [any]) ? false, : true