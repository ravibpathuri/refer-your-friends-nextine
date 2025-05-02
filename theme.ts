'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primary: [
      '#FFF5F0', // Lightest
      '#FFE0D6',
      '#FFC1A8',
      '#FF9C73',
      '#FF7A45',
      '#FF6C3A', // Primary: Vibrant Orange
      '#FF5A2E',
      '#FF4A24',
      '#FF3B1C',
      '#FF2E16',
    ],
    secondary: [
      '#E6ECEF',
      '#C5D2DD',
      '#A3B5C8',
      '#8096B1',
      '#627A9C',
      '#1A3C5A', // Secondary: Deep Blue
      '#173652',
      '#14304A',
      '#112A42',
      '#0E243A',
    ],
    accent: [
      '#E6F9FF',
      '#B3EDFF',
      '#80E0FF',
      '#4DD3FF',
      '#1AC6FF',
      '#00C4E4', // Accent: Bright Cyan
      '#00A8C2',
      '#008CA0',
      '#00707E',
      '#00545C',
    ],
    neutral: [
      '#FFFFFF',
      '#FEFEFE',
      '#FDFDFD',
      '#FCFCFC',
      '#FBFBFB',
      '#F9FAFB', // Neutral: Soft White
      '#D8D9DA',
      '#B7B8B9',
      '#969798',
      '#757677',
    ],
    success: [
      '#E6F7F0',
      '#B3E6D1',
      '#80D5B2',
      '#4DC493',
      '#1AB374',
      '#34D399', // Success: Lime Green
      '#2DB387',
      '#269275',
      '#1F7163',
      '#185051',
    ],
    error: [
      '#FFE6E6',
      '#FFB3B3',
      '#FF8080',
      '#FF4D4D',
      '#FF1A1A',
      '#F87171', // Error: Coral Red
      '#DF6161',
      '#C75151',
      '#AF4141',
      '#973131',
    ],
  },
  primaryColor: 'primary',
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Roboto, sans-serif' },
});
