'use client'


import { Button, Image, Divider } from "@nextui-org/react";
// import { Trash2 } from "lucide-react";

export default function ShoppingCart() {
  const cartItems = [
    {
      id: "3ead2e48-5c93-44aa-9cab-2e710e073c1a",
      image: "https://cdn11.bigcommerce.com/s-03842/products/14166/images/376634/PR138BI138_6204_c3_skf_6204_C3_SKF_Deep_Groove_Bearing_20_x_47_x_14mm_SZ4__68645.1729679960.120.120.jpg?c=2",
      brand: "SKF",
      title: "6204 C3 SKF Deep Groove Bearing - 20 x 47 x 14mm",
      sku: "6204/c3-skf",
      quantity: 1,
      price: 11.68,
    },
    {
      id: "365663ae-60e7-44b5-ba3d-0188246c2547",
      image: "https://cdn11.bigcommerce.com/s-03842/products/14160/images/376628/PR132BI132_6203_c3_skf_6203_C3_SKF_Deep_Groove_Bearing_17_x_40_x_12mm_SZ4__97314.1729679945.120.120.jpg?c=2",
      brand: "SKF",
      title: "6203 C3 SKF Deep Groove Bearing - 17 x 40 x 12mm",
      sku: "6203/c3-skf",
      quantity: 2,
      price: 9.98,
    },
  ];

  const handleRemoveItem = (id) => {
    console.log("Remove item:", id);
    // Add your remove logic here
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="py-4 border-b border-default-100">
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-default-100 rounded-medium shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                  removeWrapper
                />
              </div>
              
              <div className="flex-1">
                <div className="text-sm text-default-500">{item.brand}</div>
                <a href="#" className="text-primary font-medium block hover:underline">
                  {item.title}
                </a>
                <div className="text-sm text-default-500 mt-1">SKU: {item.sku}</div>
                <div className="mt-2">
                  <span className="text-sm">{item.quantity} x </span>
                  <span className="font-bold">C${item.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="ml-2">
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  aria-label="Remove item"
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-default-500 hover:text-danger"
                >
                    x
                  {/* <Trash2 size={20} /> */}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Divider className="my-4" />
      
      <div className="mt-2 flex justify-between gap-2">
        <Button
          className="w-full bg-[#ca9618] text-white font-bold text-xs uppercase"
          radius="sm"
          size="lg"
        >
          CHECKOUT
        </Button>
        
        <Button
          href="/cart"
          as="a"
          variant="bordered"
          className="w-full border-default-300 text-default-700 font-medium text-xs uppercase"
          radius="sm"
          size="lg"
        >
          VIEW CART
        </Button>
      </div>
    </div>
  );
}