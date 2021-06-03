interface IPerson4 {
    name: string;
    age?: number;
}

export class Person4 implements IPerson4 {
    constructor(public name: string, public age: number) {}
}

