// Block-Scoped: let, const keyyword

function example1(){
    let age = 20;
    if(age>=20){
        let dob = "20/10/2003";
        let name = "David";
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Dob: ${dob}`);
    }
    // console.log(`Name: ${name}, Dob: ${dob}, Age:" ${age}`);
}

example1();