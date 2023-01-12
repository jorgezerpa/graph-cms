import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-purple-800 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">ZerpaCode Blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
      <div className={`${router.pathname === '/' ? 'block' : 'hidden'}`}>
        <div className="hidden md:block">
          <h2 className="mt-5 font-bold text-3xl px-0 sm:px-5">A blog about </h2>
          <h3 className="font-semibold text-3xl px-0 sm:px-5">Development, tecnology and experiences.</h3>
        </div>
        <div className="md:hidden">
          <h2 className="mt-20 font-bold text-3xl px-5">Features </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
