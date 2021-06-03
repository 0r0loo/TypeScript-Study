{
    interface IPerson {
        name: string;
        age: number;
    }

    let yj: IPerson = {
        name: 'yeon ji',
        age: 29
    }

    let {name, age} = yj;

}