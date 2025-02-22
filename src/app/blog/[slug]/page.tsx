import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SingleBlogContent from "@/components/Blog/Blog";

interface SingleBlogPageProps {
  params: {
    slug: string;
  };
}

export default function SingleBlogPage() {
  return (
    <>
      <Header />
      <SingleBlogContent />
      <Footer />
    </>
  );
}
