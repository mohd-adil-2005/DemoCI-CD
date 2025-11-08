
import sum from './sum.js';


describe("function sum", ()=>{
test("adds 2 + 2 to equal 4", ()=>{
    expect(sum(2,3)).toBe(5)
});
test("adds -1-1 to equal to -2",()=>{
    expect(sum(-1,-1)).toBe(-2);
});
});