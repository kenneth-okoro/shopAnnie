import React from "react";
import Link from "next/link";

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <p>
        <Link href={`/`}>Home Page</Link>
      </p>
    </div>
  );
};

export default Product;
