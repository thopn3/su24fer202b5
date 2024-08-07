var peoples = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
];

const Ex1 = () => {
    // Single object
    const people = peoples.find(p => (p.age >= 10 && p.age <=20));
    return (
        <div>
            <p>1. Filter result: First element </p>
            <div>Name: {people.name} - Age: {people.age}</div>
        </div>
    )
}

const Ex2 = () => {
    // Result: Array objects
    const peopleResult = peoples.filter(p => (p.age >= 10 && p.age <=20));
    return (
        <div>
            <p>2. Filter result: [10 - 20]</p>
            {
                peopleResult?.map(p=>(
                    <div>Name: {p.name} - Age: {p.age}</div>
                ))
            }
        </div>
    )
}

const Ex3 = () => {
    // Result: true | false
    const result = peoples.every(p => (p.age >= 10 && p.age <=20))
    return (
        <div>
            <p>3. Filter result: {result?"true":"false"}</p>
        </div>
    )
}

export {
    Ex1,
    Ex2,
    Ex3
}