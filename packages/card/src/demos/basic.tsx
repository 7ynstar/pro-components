import React from 'react';
import ProCard from '@ant-design/pro-card';

export default () => {
  return (
    <ProCard title="标题" extra="extra" subTitle="副标题" tip="这是提示" style={{ width: 300 }}>
      内容
    </ProCard>
  );
};