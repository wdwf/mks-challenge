import { getProducts } from "@/app/data/products";

describe("getProducts", () => {
  it('Deve retornar produtos com sucesso', async () => {
    const mockProducts = [
      {
        id: 1,
        name: "Produto 1",
        brand: "Brand 1",
        description: "Descrição...",
        photo: "https://LinkImagem...",
        price: "5000.00",
        createdAt: "0000-00-00T00:00:00.000Z",
        updatedAt: "0000-00-00T00:00:00.000Z",
      },
      {
        id: 2,
        name: "Produto 2",
        brand: "Brand 2",
        description: "Descrição...",
        photo: "https://LinkImagem...",
        price: "5000.00",
        createdAt: "0000-00-00T00:00:00.000Z",
        updatedAt: "0000-00-00T00:00:00.000Z",
      },
    ];
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ products: mockProducts }),
    })

    try {
      const products = await getProducts();
      console.log(await getProducts());

      expect(products).toEqual(mockProducts);
    } catch (error) { }
  });

  it("Deve lançar um erro se a chamada á API falhar", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Falha na API'));

    try {
      await getProducts();
    } catch (error: any) {
      expect(error.message).toBe('Falha na API');
    }
  })
})