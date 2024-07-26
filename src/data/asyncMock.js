export const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer X",
    precio: 150000,
    categoria: "Laptops",
    descripcion: "Potente laptop diseñada para juegos de última generación.",
    img: "https://smartsale.uy/wp-content/uploads/2023/07/Notebook-Gamer-MSI-Core-i7-4.7Ghz-16GB-1TB-SSD-15.6-FHD-360Hz-RTX-3080Ti-16GB-1.jpg",
  },
  {
    id: 2,
    nombre: "Teclado Mecánico RGB",
    precio: 8000,
    categoria: "Accesorios",
    descripcion:
      "Teclado mecánico con retroiluminación RGB para una experiencia de escritura increíble.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYb_zcuEZ_Fkbh1YCiycqV_J2hde1-ehVbg&usqp=CAU",
  },
  {
    id: 3,
    nombre: "Monitor 4K",
    precio: 25000,
    categoria: "Monitores",
    descripcion:
      "Monitor de alta resolución para una calidad de imagen asombrosa.",
    img: "https://samsungplusnuevo.s3.amazonaws.com/product-family-item-image-image/square/product-family-item-image-image_nb09R3JrCBhd12NsGXIf.png",
  },
  {
    id: 4,
    nombre: "Mouse Inalámbrico",
    precio: 5000,
    categoria: "Accesorios",
    descripcion:
      "Mouse ergonómico inalámbrico para mayor comodidad y movilidad.",
    img: "https://http2.mlstatic.com/D_NQ_NP_841092-MLU70078487916_062023-O.webp",
  },
  {
    id: 5,
    nombre: "Monitor 4k gamer",
    precio: 35000,
    categoria: "Monitores",
    descripcion:
      "Monitor de alta resolución para una calidad para sumergirte en el juego",
    img: "https://http2.mlstatic.com/D_NQ_NP_757455-MLM48909420211_012022-O.webp",
  },
];

export default productos;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoFiltrado = productos.find(
        (prod) => prod.id === parseInt(id)
      );
      resolve(productoFiltrado);
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      resolve(productosFiltrados);
    }, 2000);
  });
};
