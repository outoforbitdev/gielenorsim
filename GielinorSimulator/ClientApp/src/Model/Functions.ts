export function standardize(data: any): any {
    let newData: any = {};
    Object.keys(data).forEach(k => {
        const newKey = k[0].toUpperCase() + k.substr(1, k.length - 1);
        newData[newKey] = data[k];
    });
    return newData;
}

export function setThis(this: any, f: Function) {
    return f.bind(this);
}