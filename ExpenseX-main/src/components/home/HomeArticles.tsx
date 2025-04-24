
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const HomeArticles = () => {
  const [showMore, setShowMore] = useState(false);

  const initialArticles = [
    {
      image: "https://images.pexels.com/photos/5926229/pexels-photo-5926229.jpeg",
      title: "Save More Money: Tips to Cut Unnecessary Expenses",
      description:
        "Learn actionable tips to cut unnecessary expenses, reduce your spending, and save more money each month with the help of Expenses Manager.",
    },
    {
      image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg",
      title: "How to Create a Realistic Budget: A Step-by-Step Guide",
      description:
        "Learn how to create a realistic budget that helps you manage your finances effectively and reduce financial stress with step-by-step guide using Expenses Manager.",
    },
    {
      image: "https://images.pexels.com/photos/5909813/pexels-photo-5909813.jpeg",
      title: "How to integrate Expenses Manager in your life?",
      description:
        "There are only two types of people in this world, those who download the Expenses Manager and those who don't care about their money.",
    },
  ];
  
  const extraArticles = [
    {
      image:
        "https://i.pinimg.com/736x/71/07/fb/7107fbe7c855d62994740f9b020a0877.jpg",
      title: "Lumpsum vs SIP",
      description:
        "This article explains the two ways in which you can invest in a mutual fund: Lumpsum and SIP, and which one you should choose to get the best returns.",
    },
    {
      image:
        "https://i.pinimg.com/736x/3f/07/ec/3f07ec2d3d5558a83086f564b0c23f47.jpg",
      title: "Mutual Funds: Introduction",
      description:
        "This article will give you a brief introduction on mutual funds, why you should invest in them and some of the key concepts you should know before investing in a mutual fund.",
    },
    {
      image:
        "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "How to start your investment journey?",
      description:
        "Many people think about investing as gambling or a game. Many are in it believing this, expecting huge profits overnight and many stay out of it considering the risk in this gambling.",
    },
    {
      image:
        "https://www.currencytransfer.com/wp-content/uploads/2022/08/Rising-Inflation.min_.jpg",
      title: "Inflation",
      description:
        "Even a moderate rate of inflation (~4%) means that the money held as cash or in your savings account or kept in any financial instrument which offers less returns than the inflation rate, will lose its purchasing power over time.",
    },
    {
      image:
        "https://cdn.due.com/blog/wp-content/uploads/2021/02/investing-in-growth.png",
      title: "The power of compounding",
      description:
        "Compounding is also known as the eighth wonder of the world. A tiny portion of your earnings can turn into immense wealth if compounded efficiently. This article explains compounding and its power with the help of an example.",
    },
    {
      image:
        "https://www.nbofi.com/assets/files/NmzfSz4F/12899-01-financial-resolution-blog-image.jpg",
      title: "50-30-20 Rule",
      description:
        "This rule is a template that is intended to help you manage your money and to save for emergencies and retirement. The rule is to divide your monthly after-tax income into three categories. 50% for needs, 30% for wants and 20% for savings and investment.",
    },
  ];

  const handleToggleArticles = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="py-20 bg-[#1A1A1A]" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Insights and Tips for Smarter Finance Management
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialArticles.map((article, index) => (
            <div key={`initial-${index}`} className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg border border-[#3A3A3A] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400">
                  {article.description}
                </p>
              </div>
            </div>
          ))}

          {showMore && extraArticles.map((article, index) => (
            <div key={`extra-${index}`} className="bg-[#2D2D2D] rounded-lg overflow-hidden shadow-lg border border-[#3A3A3A] transition-transform duration-300 hover:-translate-y-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleToggleArticles}
            className="bg-primary/90 backdrop-blur-sm text-white px-8 py-3 !rounded-button hover:bg-primary transition-all duration-300 font-medium whitespace-nowrap shadow-lg shadow-primary/20"
          >
            {showMore ? "Show Less Articles" : "See More Articles"}
          </Button>
        </div>
      </div>
    </section>
  );
};
