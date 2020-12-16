//FOR EACH
const double = array => {
    new_array =  [];
    array.forEach(element => {
        new_array.push(element * 2);
    });
    console.log(new_array);
};

double([1,2,3]);

const evens = array => {
    new_array = [];
    array.forEach(element => {
        if(element % 2 === 0){
            new_array.push(element);
        };
    });
    console.log(new_array);
};

evens([1,2,3,4,5,6,7,8]);

const primero_ultimo = array => {
    new_array = [];
    array.forEach(element => {
        new_array.push(element[0] + element[element.length - 1]);
    });
    console.log(new_array);
};

primero_ultimo(["ale","paez","hernandez"]);

//MAP
const maps = [1,10,100].map(element => {
    return element * 2;
});
