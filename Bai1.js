// Viết một chương trình quản lý danh sách sản phẩm với các chức năng:
// - Thêm sản phẩm mới vào danh sách.
// - Hiển thị danh sách sản phẩm.
// - Tìm kiếm sản phẩm theo tên.
// - Tính tổng giá trị các sản phẩm.
let products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];
//Thêm sản phẩm mới vào danh sách
products.push({ name: "Headphones", price: 2438 });
products.unshift({ name: "Smartwatch", price: 342 });
//Hiển thị danh sách sản phẩm
console.log("Danh sách sản phẩm:");
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - ${product.price}`);
});
//Tìm kiếm sản phẩm theo tên
const searchProduct = products.find((x) => x.name === "Laptop");
if (searchProduct) {
  console.log(
    `Sản phẩm tìm thấy: ${searchProduct.name} - ${searchProduct.price}`,
  );
} else {
  console.log("Không tìm thấy sản phẩm.");
}
//Tính tổng giá trị các sản phẩm - Duyệt mảng
console.log("Tổng giá trị sản phẩm:");
let totalValue = 0;
products.forEach((product) => {
  totalValue += Number(product.price);
});
console.log(`${totalValue}`);
