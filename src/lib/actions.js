"use server";

import { sampleReviews } from "./data";

// In a real application, this would interact with a database
const reviews = [...sampleReviews];

export async function getReviews(productId) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return reviews.filter((review) => review.productId === productId);
}

export async function addReview(data) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newReview = {
    ...data,
    id: `r${reviews.length + 1}`,
    createdAt: new Date().toISOString(),
  };

  reviews.push(newReview);
  return newReview;
}
