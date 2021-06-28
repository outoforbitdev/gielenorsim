import { EntityRequest } from "../Model/Result";


interface IObjectWithKeys {
    [s: string]: any,
}

export function standardize(data: IObjectWithKeys): Object {
        let newData: any = {};
        Object.keys(data).forEach(k => {
            const newKey = k[0].toUpperCase() + k.substr(1, k.length - 1);
            if (typeof data[k] !== "string" && data[k] as IObjectWithKeys) {
                newData[newKey] = standardize(data[k]);
            } else {
                newData[newKey] = data[k];
            }
        });
        return newData;
}

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

export async function get<T>(url: string): Promise<T> {
    console.log(url);
    const response = await fetch(url);
    console.log(response);
    const json = await response.json();
    console.log(json);
    const data = standardize(json) as T;
    console.log(data);
    return data;
}

export async function getEntity<T>(url: string, request: EntityRequest): Promise<T> {
    const newUrl = url + "/" + JSON.stringify(request);
    return await get<T>(newUrl);
}

//type Params<F extends (...args: any[]) => any> =
//    F extends ((...args: infer A) => any) ? A : never

//type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never

//type Tail<T extends any[]> =
//    ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
//    ? TT : never
//type HasTail<T extends any[]> = T extends ([] | [any]) ? false, : true