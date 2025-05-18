"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Modal,
  List,
  Avatar,
  Rate,
  Tag,
  Space,
  Divider,
  Typography,
  Skeleton,
} from "antd";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const { Meta } = Card;
const { Text } = Typography;

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <Card
      hoverable
      cover={
        <div className="aspect-square relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover"
            priority
          />
        </div>
      }
      actions={[
        <div
          key="actions"
          className="flex flex-col sm:flex-row gap-2 w-full px-2"
        >
          <Button
            type="default"
            block
            onClick={showModal}
            className="sm:flex-1"
          >
            View Details
          </Button>
          <Button
            type="primary"
            block
            icon={<ShoppingCartOutlined />}
            className="sm:flex-1"
          >
            Add to Cart
          </Button>
        </div>,
      ]}
      styles={{ body: { padding: 16 } }}
    >
      <Meta
        title={
          <div className="flex justify-between items-start gap-2">
            <Text ellipsis={{ tooltip: product.name }} className="flex-1">
              {product.name}
            </Text>
            <Tag color="blue">{product.category}</Tag>
          </div>
        }
        description={
          <Text type="secondary" ellipsis>
            {product.brand}
          </Text>
        }
      />

      <div className="mt-3 flex items-center">
        <Rate
          disabled
          defaultValue={product.rating}
          allowHalf
          character={<StarOutlined />}
          style={{ fontSize: 14 }}
        />
        <Text type="secondary" className="text-xs ml-2">
          ({product.reviewCount} reviews)
        </Text>
      </div>

      <Text
        type="secondary"
        className="text-sm mt-2 line-clamp-2"
        ellipsis={{ tooltip: product.description }}
      >
        {product.description}
      </Text>

      <Text strong className="block mt-3 text-lg">
        ${product.price.toFixed(2)}
      </Text>

      <Modal
        title={product.name}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-end">
            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        }
        width={800}
        centered
        className="product-modal"
        styles={{
          body: {
            maxHeight: "calc(100dvh - 120px)",
            overflowY: "auto",
            padding: "24px",
          },
          content: {
            maxHeight: "100dvh",
          },
        }}
        wrapClassName="fullscreen-mobile-modal"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover "
            />
          </div>

          <div className="space-y-4">
            <div>
              <Text strong className="block mb-2">
                Description
              </Text>
              <Text type="secondary">{product.description}</Text>
            </div>

            <div>
              <Text strong className="block mb-2">
                Key Ingredients
              </Text>
              <List
                size="small"
                dataSource={product.ingredients}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>

            <div>
              <Text strong className="block mb-2">
                Good For
              </Text>
              <Space size={[8, 8]} wrap>
                {product.goodFor.map((concern, i) => (
                  <Tag key={i}>{concern}</Tag>
                ))}
              </Space>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Text strong className="text-lg">
                ${product.price.toFixed(2)}
              </Text>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="reviews-section">
          <div className="flex justify-between items-center mb-4">
            <Text strong className="text-lg">
              Reviews
            </Text>
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
