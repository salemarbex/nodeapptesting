


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

const socials = [
  { name: "Twitter", href: "https://twitter.com/", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.01-4.52 4.5 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64.9c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.03c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" },
  { name: "Instagram", href: "https://instagram.com/", icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 1.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" },
  { name: "Facebook", href: "https://facebook.com/", icon: "M17.5 2h-11A4.5 4.5 0 0 0 2 6.5v11A4.5 4.5 0 0 0 6.5 22h5.5v-7h-2v-2h2v-1.5c0-2.07 1.23-3.2 3.12-3.2.9 0 1.84.16 1.84.16v2h-1.04c-1.03 0-1.35.64-1.35 1.3V13h2.3l-.37 2h-1.93v7h3.5A4.5 4.5 0 0 0 22 17.5v-11A4.5 4.5 0 0 0 17.5 2z" },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black font-sans relative">
      {/* Floating Cart Button */}
      <button className="fixed bottom-8 right-8 z-50 bg-zinc-900 text-white p-4 rounded-full shadow-lg hover:bg-zinc-700 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center gap-2 animate-bounce-cart">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <span className="hidden sm:inline">Cart</span>
      </button>

      {/* Free Shipping Banner */}
      <div className="w-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white text-center py-2 font-semibold tracking-wide animate-gradient-x">
        🚚 Free Shipping on all orders over $50!
      </div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-5 bg-white/80 dark:bg-zinc-900/80 shadow-md sticky top-0 z-20 backdrop-blur">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="ModernStore Logo" width={36} height={36} className="dark:invert" />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">ModernStore</span>
        </div>
        <div className="hidden md:flex gap-8 text-zinc-700 dark:text-zinc-200 font-medium">
          <a href="#products" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Products</a>
          <a href="#newsletter" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Newsletter</a>
        </div>
        <a href="#products" className="px-5 py-2 rounded-full bg-zinc-900 text-white font-semibold shadow hover:scale-105 hover:bg-zinc-700 transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700 hidden sm:inline-block">Shop Now</a>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center min-h-[60vh] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover object-center opacity-40 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-zinc-100 dark:from-zinc-900/90 dark:to-black" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4 animate-fade-in-up">Elevate Your Style</h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mb-8 animate-fade-in-up delay-100">
          Discover the latest in modern fashion and tech. Shop exclusive products, curated for you.
        </p>
        <a
          href="#products"
          className="inline-block px-8 py-3 rounded-full bg-zinc-900 text-white font-semibold text-lg shadow hover:scale-105 hover:bg-zinc-700 transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700 animate-fade-in-up delay-200 animate-pulse-cta"
        >
          Shop Now
        </a>
        <div className="mt-12 animate-fade-in-up delay-300 relative inline-block">
          <Image src="/product1.jpg" alt="Featured Product" width={220} height={220} className="rounded-2xl shadow-xl border-4 border-white dark:border-zinc-900 mx-auto" />
          <span className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce-badge">Bestseller</span>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="w-full max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-10 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className="group bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden animate-fade-in-up border-2 border-transparent hover:border-gradient"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-32 h-32 mb-4 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover", borderRadius: "1rem" }}
                  sizes="128px"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{product.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-2 text-center">{product.description}</p>
              <span className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-4">{product.price}</span>
              <button className="px-5 py-2 rounded-full bg-zinc-900 text-white font-medium shadow hover:scale-105 hover:bg-zinc-700 transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center text-center animate-fade-in-up">
            <Image src="/avatar1.png" alt="Customer 1" width={56} height={56} className="rounded-full mb-3" />
            <p className="text-zinc-700 dark:text-zinc-200 mb-2">“Absolutely love the sneakers! Super comfy and stylish.”</p>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">— Sarah M.</span>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center text-center animate-fade-in-up delay-100">
            <Image src="/avatar2.png" alt="Customer 2" width={56} height={56} className="rounded-full mb-3" />
            <p className="text-zinc-700 dark:text-zinc-200 mb-2">“The leather bag is my new favorite. Great quality!”</p>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">— Alex R.</span>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
            <Image src="/avatar3.png" alt="Customer 3" width={56} height={56} className="rounded-full mb-3" />
            <p className="text-zinc-700 dark:text-zinc-200 mb-2">“Fast shipping and the smartwatch is amazing. Highly recommend!”</p>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">— Jamie L.</span>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="w-full px-4 py-12 flex flex-col items-center bg-zinc-50 dark:bg-zinc-900">
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
            className="px-6 py-2 rounded-full bg-zinc-900 text-white font-semibold shadow hover:scale-105 hover:bg-zinc-700 transition-all dark:bg-zinc-800 dark:hover:bg-zinc-700"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 flex flex-col items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm bg-transparent">
        <div className="flex gap-4 mb-2">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </div>
        <div>
          &copy; {new Date().getFullYear()} ModernStore. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
