const fruits = [
    { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
    { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
    { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
    { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
    { fruitId: 5, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 5, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
  ];
  
  // 1. Buah apa saja yang dimiliki Andi?
  const fruitNames = [...new Set(fruits.map(fruit => fruit.fruitName.toLowerCase()))];
  console.log("Buah yang dimiliki Andi:", fruitNames);
  
  // 2. Memisahkan buah berdasarkan tipe dan menghitung jumlah wadah
  const importFruits = fruits.filter(fruit => fruit.fruitType === 'IMPORT');
  const localFruits = fruits.filter(fruit => fruit.fruitType === 'LOCAL');
  
  console.log("Jumlah wadah yang dibutuhkan: 2");
  console.log("Buah dalam wadah 'IMPORT':", [...new Set(importFruits.map(fruit => fruit.fruitName.toLowerCase()))]);
  console.log("Buah dalam wadah 'LOCAL':", [...new Set(localFruits.map(fruit => fruit.fruitName.toLowerCase()))]);
  
  // 3. Total stok buah di masing-masing wadah
  const totalImportStock = importFruits.reduce((total, fruit) => total + fruit.stock, 0);
  const totalLocalStock = localFruits.reduce((total, fruit) => total + fruit.stock, 0);
  
  console.log("Total stok buah dalam wadah 'IMPORT':", totalImportStock);
  console.log("Total stok buah dalam wadah 'LOCAL':", totalLocalStock);
  
  // 4. Komentar terkait kasus di atas
  console.log("Komentar:");
  console.log("- Terdapat duplikasi fruitId dengan nilai 5.");
  console.log("- Terdapat variasi huruf besar dan kecil pada nama buah ('Apel' dan 'apel', 'Kurma' dan 'KURMA').");
  