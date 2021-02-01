import React from 'react';
import { useRouter } from 'next/router';

export default function ProjectPage() {
  const router = useRouter();
  const { projectPage } = router.query;

  return (
    <div>
      <p>This is a project page named {projectPage}</p>
    </div>
  );
}
