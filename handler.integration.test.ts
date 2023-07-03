
const { connect, disconnect } = require('mongoose');
const mongoose = require('mongoose');

// Define the schema
const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  }
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

describe('mongodb data testing',()=>{
   
    beforeAll(async()=>{
        await connect('mongodb://localhost:27017/mongodb-test');
        await Product.insertMany([
            {
                id:'1',
                name:'Akshay'
            },
            {
                id:'1',
                name:'Yogesh'
            }
        ])
    })

    afterAll(async()=>{
        await Product.deleteMany({});
        await disconnect();
    })

    it('should get 3 products',async()=>{
        const response = await Product.find();
        expect(response.length).toBe(2);
        expect(response[0].name).toEqual('Akshay')
        expect(response[1].name).toEqual('Yogesh')
    })
})