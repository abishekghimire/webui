
import React, { useState } from "react";
import { Grid, Button, Drawer, Input } from "antd"; // ✅ Added Input
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const { useBreakpoint } = Grid;
const { Search } = Input; // ✅ Destructure Search input

const TopHeader = () => {
  const screens = useBreakpoint();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openDrawer = () => {
    setMobileMenuOpen(true);
  };

  const closeDrawer = () => {
    setMobileMenuOpen(false);
  };

  // ✅ Handle search (optional logic)
  const handleSearch = (value) => {
    console.log("Search:", value);
    // You can redirect or filter items based on search
  };

  return (
    <>
      <div className={`sticky top-0 z-40 w-full border-b bg-background`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10 ml-6">
            <Link href="/">
              <span className="inline-block font-bold text-xl">
                SkinReview
              </span>
            </Link>
            {screens.md && (
              <nav className="flex gap-6 items-center">
                <a
                  href="#products"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Products
                </a>
                <a
                  href="#about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>

                {/* ✅ Search bar (Desktop only) */}
                <Search
                  placeholder="Search products"
                  onSearch={handleSearch}
                  style={{ width: 200 }}
                />
              </nav>
            )}
          </div>

          <div className="flex gap-4 mr-6">
            {screens.md ? (
              <>
                <Button type="default">Sign In</Button>
                <Button type="primary">Sign Up</Button>
              </>
            ) : (
              <Button
                type="text"
                icon={
                  <MenuOutlined
                    size={24}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                }
                onClick={openDrawer}
              />
            )}
          </div>
        </div>

        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={mobileMenuOpen}
          width={300}
        >
          <div className="flex flex-col gap-4">
            {/* ✅ Mobile Search Bar */}
            <Search
              placeholder="Search products"
              onSearch={handleSearch}
              allowClear
            />

            <a
              href="#products"
              className="block py-2 text-muted-foreground hover:text-foreground"
              onClick={closeDrawer}
            >
              Products
            </a>
            <a
              href="#about"
              className="block py-2 text-muted-foreground hover:text-foreground"
              onClick={closeDrawer}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-muted-foreground hover:text-foreground"
              onClick={closeDrawer}
            >
              Contact
            </a>
            <div className="border-t pt-4 flex flex-col gap-4">
              <Button type="default" block>
                Sign In
              </Button>
              <Button type="primary" block>
                Sign Up
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default TopHeader;

