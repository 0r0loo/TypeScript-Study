interface IPerson {
    name: string;
    age: number;
}


interface ICompancy {
    name: string;
    age: number;
}

let jack: IPerson = {name: 'Jack', age: 32}
let jane: IPerson = { name:'jane', age: 32}

let apple: ICompancy = { name: 'Apple Computer, Inc', age: 43},
    ms: ICompancy = { name: 'Microsoft', age: 44}

    