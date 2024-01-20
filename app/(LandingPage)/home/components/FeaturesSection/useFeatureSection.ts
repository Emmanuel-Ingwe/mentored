'use client';

import { useMemo, useState } from 'react';
const IMG_URL =
  'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697376655/mentored/images/obfcgsxhf31pbfderphy.jpg';
export const useFeatureSection = () => {
  const [featureImg, setFeatureImg] = useState(IMG_URL);
  const features = useMemo(() => {
    return {
      featureData: [
        {
          featImg:
            'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697376655/mentored/images/obfcgsxhf31pbfderphy.jpg',
          featureDescription:
            'Stay on target with custom tasks designed to lead you toward your goals. Our structured approach ensures clear progress and a focused learning journey.',
          featureTitle: 'Tasks',
          isActive: true,
        },
        {
          featImg:
            'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697376655/mentored/images/fcezikuqcwpj0oqibzzw.jpg',
          featureDescription:
            'Benefit from expert feedback with mentor reviews. Improve your skills and projects while gaining valuable perspectives for continuous growth.',
          featureTitle: 'Reviews',
          isActive: false,
        },
        {
          featImg:
            'https://res.cloudinary.com/dqezpdvy9/image/upload/v1697376655/mentored/images/nzmhqmjh7tcn29nulymm.jpg',
          featureDescription:
            'Collaborate with your mentor to set milestones, track your progress, and celebrate achievements. Empower your tech journey with tangible results.',
          featureTitle: 'Goals',
          isActive: false,
        },
      ],
    };
  }, []);

  const [featureData, setFeatureData] = useState(features.featureData);

  const handleFeatureClick = (index: number) => {
    const newFeatureData = featureData.map((feature, i) => {
      if (i === index) {
        setFeatureImg(feature.featImg);
        return { ...feature, isActive: true };
      }
      return { ...feature, isActive: false };
    });
    setFeatureData(newFeatureData);
  };

  const onHover = (index: number) => {
    setTimeout(() => {
      handleFeatureClick(index);
    }, 500);
  };

  return {
    featureData,
    featureImg,
    handleFeatureClick,
    onHover,
  };
};
