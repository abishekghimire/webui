"use client";

import { useState, useEffect } from "react";
import {
  Avatar,
  List,
  Divider,
  Rate,
  Tag,
  Skeleton,
  Typography,
  Space,
} from "antd";
import { getReviews } from "@/lib/actions";

const { Text } = Typography;

export default function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(productId);
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  if (isLoading) {
    return <Skeleton active paragraph={{ rows: 4 }} />;
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <Text type="secondary">
          No reviews yet. Be the first to review this product!
        </Text>
      </div>
    );
  }

  return (
    <List
      itemLayout="vertical"
      dataSource={reviews}
      renderItem={(review) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar>{review.name.charAt(0)}</Avatar>}
            title={
              <Space>
                <Text strong style={{ whiteSpace: "nowrap" }}>
                  {review.name}
                </Text>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  <Tag>{review.skinType} Skin</Tag>
                  <Tag>{review.skinConcern}</Tag>
                </div>
              </Space>
            }
            description={
              <Rate
                disabled
                defaultValue={review.rating}
                style={{ fontSize: 14 }}
              />
            }
          />

          <div style={{ marginLeft: 48 }}>
            <Space direction="vertical" size="small">
              <Text type="secondary">
                <Text strong>Usage: </Text>
                {review.usageFrequency}, {review.usageDuration}
              </Text>

              <div>
                <Text strong>Results:</Text>
                <Text type="secondary" style={{ display: "block" }}>
                  {review.results}
                </Text>
              </div>

              <div>
                <Text strong>Review:</Text>
                <Text type="secondary" style={{ display: "block" }}>
                  {review.review}
                </Text>
              </div>
            </Space>
          </div>
        </List.Item>
      )}
    />
  );
}
