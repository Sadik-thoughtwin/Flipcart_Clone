export class ProductService {
  async getProductsSmall() {
    const res = await fetch("data/products-small.json")
      .then((res) => 
       res.json())
      .then((result) => result.data)
      .catch((error) => {
      });
    return res;
  }
}
