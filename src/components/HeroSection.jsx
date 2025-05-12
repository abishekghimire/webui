import { Button } from "antd";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
      <div className="container px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 md:order-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Find the Perfect Skin Care Products for Your Unique Skin
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Real reviews from real people with similar skin types and
                concerns. Make informed decisions about your skin care routine.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <Link href="#products">
                <Button size="lg" className="px-8">
                  Browse Products
                </Button>
              </Link>
              <Link href="#about">
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:order-1">
            <div className="relative h-[300px] md:h-[450px] w-full max-w-[350px] rounded-xl bg-gradient-to-b from-pink-100 to-rose-100 p-1 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white p-6">
                <div className="space-y-4">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-pink-200 to-rose-200 mx-auto"></div>
                  <div className="h-4 w-full rounded-full bg-muted mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-muted"></div>
                    <div className="h-2 w-full rounded-full bg-muted"></div>
                    <div className="h-2 w-3/4 rounded-full bg-muted"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-6 w-16 rounded-md bg-muted"></div>
                    <div className="h-6 w-16 rounded-md bg-muted"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
