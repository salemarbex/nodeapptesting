

import Image from "next/image";

const products = [
  {
    name: "Minimalist Sneakers",
    image: "/product1.jpg",
    price: "$89",
    description: "Lightweight, stylish, and perfect for everyday wear.",
  },
  {
    name: "Classic Leather Bag",
    image: "/product2.jpg",
    price: "$129",
    description: "Premium leather, timeless design, fits all essentials.",
  },
  {
    name: "Smartwatch Pro",
    image: "/product3.jpg",
    price: "$199",
    description: "Track your health and stay connected in style.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black font-sans">
      {/* Hero Section */}
      <section className="w-full px-4 py-20 flex flex-col items-center text-center bg-white/80 dark:bg-zinc-900/80 shadow-lg">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Elevate Your Style
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mb-8">
          Discover the latest in modern fashion and tech. Shop exclusive products, curated for you.
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-3 rounded-full bg-zinc-900 text-white font-semibold text-lg shadow hover:bg-zinc-700 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          Shop Now
        </a>
      </section>

      {/* Product Highlights */}
      <section id="products" className="w-full max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="w-32 h-32 mb-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {product.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-2 text-center">
                {product.description}
              </p>
              <span className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-4">
                {product.price}
              </span>
              <button className="px-5 py-2 rounded-full bg-zinc-900 text-white font-medium shadow hover:bg-zinc-700 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full px-4 py-12 flex flex-col items-center bg-zinc-50 dark:bg-zinc-900">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">Stay in the Loop</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-center max-w-md">
          Subscribe to our newsletter for exclusive offers and the latest updates.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-zinc-900 text-white font-semibold shadow hover:bg-zinc-700 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-zinc-500 dark:text-zinc-400 text-sm bg-transparent">
        &copy; {new Date().getFullYear()} ModernStore. All rights reserved.
      </footer>
    </div>
  );
}
