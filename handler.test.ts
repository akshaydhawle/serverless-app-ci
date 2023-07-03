
const sum = (a,b)=>{
    return a+b;
}

describe('Handler Test Cases',()=>{
    it('should return 3',()=>{
        const response = sum(1,2);
        expect(response).toBe(3);
    })
    it('should return -3',()=>{
        const response = sum(-1,-2);
        expect(response).toBe(-3);
    })
})