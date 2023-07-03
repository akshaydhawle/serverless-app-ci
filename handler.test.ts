
const sum = (a,b)=>{
    return a+b;
}

describe('Handler Test Cases',()=>{

    it('should return correct result',()=>{
        const response = sum(1,2);
        expect(response).toBe(3);
    })

})