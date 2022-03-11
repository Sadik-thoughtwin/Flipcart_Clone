export class ProductService {
  async getProductsSmall() {
    const res = await fetch("data/products-small.json")
      .then((res) => 
       res.json())
      .then((d) => d.data)
      .catch((err) => {
      });
    return res;
  }
}
