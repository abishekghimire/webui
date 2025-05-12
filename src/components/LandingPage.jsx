import { Button, Form, Input, Grid, Row, Col } from "antd";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import { skinProducts } from "@/lib/data";

const { useBreakpoint } = Grid;

export default function LandingPage() {
  const screens = useBreakpoint();
  const horizontalPadding = "px-4 sm:px-6 lg:px-8";

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`sticky top-0 z-40 w-full border-b bg-background ${horizontalPadding}`}
      >
        <div className="container flex h-16 items-center justify-between ">
          <div className="flex items-center gap-6 md:gap-10 px-34">
            <a href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">SkinReview</span>
            </a>
            {screens.md && (
              <nav className="flex gap-6">
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
            )}
          </div>
          <div className="flex justify-end gap-2  ">
            <Button type="default">Sign In</Button>
            <Button type="primary">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 ">
        <div className={horizontalPadding}>
          <HeroSection />
        </div>

        <section id="products" className="py-12 md:py-24 lg:py-32">
          <div className={`container mx-auto ${horizontalPadding}`}>
            <div className="flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mx-auto">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                Discover Skin Products
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Browse our curated collection of skin care products and read
                real reviews from users with similar skin concerns.
              </p>
            </div>

            <Row gutter={[24, 24]} className="mt-12 px-8">
              {skinProducts.map((product) => (
                <Col key={product.id} xs={24} sm={12} lg={8} xl={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className={`container mx-auto ${horizontalPadding}`}>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                About SkinReview
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                SkinReview is a community-driven platform where users can share
                their experiences with skin care products. Our mission is to
                help people find the right products for their specific skin
                concerns by providing honest, detailed reviews from real users.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className={`container mx-auto ${horizontalPadding}`}>
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                Contact Us
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Have questions or suggestions? We'd love to hear from you!
              </p>
              <div className="w-full max-w-md">
                <Form layout="vertical">
                  <Form.Item label="Email" name="email">
                    <Input type="email" placeholder="Your email" size="large" />
                  </Form.Item>
                  <Form.Item label="Message" name="message">
                    <Input.TextArea
                      placeholder="Your message"
                      rows={4}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
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
