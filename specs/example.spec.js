import { expect } from "chai";
describe('Math functions',() =>{ 
    it('a + b = c',() =>{ 
    let a = 5;
    let b = 7;
    let c = a + b;
expect(c).to.eq(12)
});
    it('a - b = c',() =>{ 
     let a = 5;
     let b = 7;
     let c = a - b;
    expect(c).to.eq(-2)
});

    it('a * b = c',() =>{ 
    let a = 5;
    let b = 7;
    let c = a * b;
    expect(c).to.eq(35)
});

it('a / b = c',() =>{ 
    let a = 35;
    let b = 7;
    let c = a / b;
    expect(c).to.eq(5)
});

it('a ** b = c',() =>{ 
    let a = 5;
    let b = 3;
    let c = a ** b;
    expect(c).to.eq(125)
});

it('a ** 0.5',() =>{ 
    let a = 4;
    let c = a ** 0.5;
    expect(c).to.eq(2)
});

});