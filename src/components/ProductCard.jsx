"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Badge,
  Modal,
  List,
  Avatar,
  Rate,
  Tag,
  Space,
  Divider,
} from "antd";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const { Meta } = Card;

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      hoverable
      cover={
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      }
      actions={[
        <Button type="default" block onClick={showModal}>
          View Details
        </Button>,
        <Button type="primary" block icon={<ShoppingCartOutlined />}>
          Add to Cart
        </Button>,
      ]}
    >
      <Meta
        title={product.name}
        description={product.brand}
        avatar={<Tag color="blue">{product.category}</Tag>}
      />
      <div className="mt-2">
        <Rate
          disabled
          defaultValue={product.rating}
          allowHalf
          character={<StarOutlined />}
          style={{ fontSize: 14 }}
        />
        <span className="text-xs text-gray-500 ml-2">
          ({product.reviewCount} reviews)
        </span>
      </div>
      <div className="mt-2">
        <p className="text-gray-500 line-clamp-2 text-sm">
          {product.description}
        </p>
        <p className="font-medium mt-2">${product.price.toFixed(2)}</p>
      </div>

      <Modal
        title={product.name}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={800}
        centered
        className="custom-modal"
        bodyStyle={{
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
          padding: "24px",
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Description</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
            <div>
              <h3 className="font-medium">Key Ingredients</h3>
              <List
                size="small"
                dataSource={product.ingredients}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>
            <div>
              <h3 className="font-medium">Good For</h3>
              <Space size={[8, 8]} wrap className="mt-2">
                {product.goodFor.map((concern, i) => (
                  <Tag key={i}>{concern}</Tag>
                ))}
              </Space>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">
                ${product.price.toFixed(2)}
              </span>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <Divider />

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Reviews</h3>
            <Button
              onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
              type="default"
            >
              {isReviewFormOpen ? "Cancel" : "Write a Review"}
            </Button>
          </div>

          {isReviewFormOpen && (
            <div className="mb-6 p-4 border rounded-lg">
              <ReviewForm
                productId={product.id}
                onSubmitSuccess={() => setIsReviewFormOpen(false)}
              />
            </div>
          )}

          <ReviewList productId={product.id} />
        </div>
      </Modal>
    </Card>
  );
}
