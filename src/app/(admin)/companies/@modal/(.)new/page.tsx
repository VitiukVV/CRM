'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/CompanyFormModal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <CompanyFormModal
      onSubmit={console.log}
      show={true}
      onClose={() => router.back()}
    />
  );
}
