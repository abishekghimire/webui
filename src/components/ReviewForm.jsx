"use client";

import { useState } from "react";
import { Button, Form, Input, Radio, Select, Rate, message, Space } from "antd";
import { addReview } from "@/lib/actions";

const { TextArea } = Input;
const { Option } = Select;

export default function ReviewForm({ productId, onSubmitSuccess }) {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      await addReview({
        productId,
        ...values,
        rating: Number.parseInt(values.rating),
      });

      form.resetFields();
      message.success("Review submitted successfully!");
      if (onSubmitSuccess) onSubmitSuccess();
    } catch (error) {
      console.error("Failed to submit review:", error);
      message.error("Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="space-y-4"
      initialValues={{
        skinType: "normal",
        skinConcern: "acne",
        usageFrequency: "daily",
        usageDuration: "1-3-months",
        rating: 5,
      }}
    >
      <Form.Item
        label="Your Name"
        name="name"
        rules={[{ required: true, message: "Please input your name" }]}
      >
        <Input />
      </Form.Item>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item label="Skin Type" name="skinType">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="dry">Dry</Radio>
              <Radio value="oily">Oily</Radio>
              <Radio value="combination">Combination</Radio>
              <Radio value="normal">Normal</Radio>
              <Radio value="sensitive">Sensitive</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Main Skin Concern" name="skinConcern">
          <Select>
            <Option value="acne">Acne</Option>
            <Option value="aging">Aging</Option>
            <Option value="dryness">Dryness</Option>
            <Option value="hyperpigmentation">Hyperpigmentation</Option>
            <Option value="redness">Redness</Option>
            <Option value="texture">Texture</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item label="How Often Used" name="usageFrequency">
          <Select>
            <Option value="daily">Daily</Option>
            <Option value="twice-daily">Twice Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="biweekly">Bi-weekly</Option>
            <Option value="monthly">Monthly</Option>
            <Option value="occasionally">Occasionally</Option>
          </Select>
        </Form.Item>

        <Form.Item label="How Long Used" name="usageDuration">
          <Select>
            <Option value="less-than-week">Less than a week</Option>
            <Option value="1-4-weeks">1-4 weeks</Option>
            <Option value="1-3-months">1-3 months</Option>
            <Option value="3-6-months">3-6 months</Option>
            <Option value="6-12-months">6-12 months</Option>
            <Option value="over-1-year">Over 1 year</Option>
          </Select>
        </Form.Item>
      </div>

      <Form.Item
        label="Results After Using"
        name="results"
        rules={[{ required: true, message: "Please describe your results" }]}
      >
        <TextArea
          rows={3}
          placeholder="Describe the changes you've noticed in your skin after using this product"
        />
      </Form.Item>

      <Form.Item label="Rating" name="rating">
        <Rate />
      </Form.Item>

      <Form.Item
        label="Full Review"
        name="review"
        rules={[{ required: true, message: "Please write your review" }]}
      >
        <TextArea
          rows={4}
          placeholder="Share your detailed experience with this product"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isSubmitting}>
          Submit Review
        </Button>
      </Form.Item>
    </Form>
  );
}
