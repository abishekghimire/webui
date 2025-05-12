import { Button } from "antd";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import { skinProducts } from "@/lib/data";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">SkinReview</span>
            </a>
            <nav className="hidden md:flex gap-6">
              <a
                href="#products"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                About
              </a>
              <a
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 ml-[6%] mr-[6%]">
        <HeroSection />

        <section id="products" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Discover Skin Products
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Browse our curated collection of skin care products and read real
              reviews from users with similar skin concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
            {skinProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              About SkinReview
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              SkinReview is a community-driven platform where users can share
              their experiences with skin care products. Our mission is to help
              people find the right products for their specific skin concerns by
              providing honest, detailed reviews from real users.
            </p>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <textarea
                  placeholder="Your message"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SkinReview. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
