import './App.css';
import Forecast from "./components/Forecast/Forecast";




const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
    

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunset Spotter</h1>
      </header>
        <main>
          <Forecast />

          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Locations</h2>

              <div className="grid grid-cols-4 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div className="w-vw aspect-w-0.3 aspect-h-0.3 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-10px h-10px object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          

        </main>
        <footer>
          Made by Sebastian Priss
        </footer>
    </div>
  );
}

export default App;
