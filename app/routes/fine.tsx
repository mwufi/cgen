import Header from "~/components/ai-generated/Header";
import ProductCard from "~/components/ai-generated/ProductCard";
import CallToAction from "~/components/ai-generated/CallToAction";
import Footer from "~/components/ai-generated/Footer";

export default function LandingPage() {
  // Example product data (this might come from API or static data)
  const products = [
    {
      id: 1,
      name: "Sneaker Alpha",
      price: "120",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    },
    {
      id: 2,
      name: "Boot Beta",
      price: "150",
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80",
    },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="container mx-auto p-4 flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>

        <CallToAction
          title="Explore Our Exclusive Collection"
          description="Get your hands on the latest and greatest in footwear. Limited stock available!"
          buttonText="Shop Now"
        />
      </main>

      <Footer />
    </div>
  );
}
