const calculator=require('../calculator');

test('Test for add method',()=>{
    expect(calculator.add(2,3)).toBe(5);
});

test('Test for sub method',()=>{
    expect(calculator.sub(10,1)).toBe(9);
});

