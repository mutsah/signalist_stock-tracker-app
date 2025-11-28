import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link className="auth-logo" href={'/'}>
          <Image src="/assets/icons/logo.svg" alt="Signalist Logo" width={140} height={32} />
        </Link>
      </section>
    </main>
  );
};
export default Layout;
