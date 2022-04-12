import React, { useState } from 'react';
import ContentWrapper from '@/components/ContentWrapper';
import styles from './index.less';

export default function Page() {
  const [a, setA] = useState<string>(04);
  return <ContentWrapper title="模版页面1">模版页面1</ContentWrapper>;
}
