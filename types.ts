import React from 'react';

export interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  isAvailable: boolean;
  isNew?: boolean;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content?: React.ReactNode;
}