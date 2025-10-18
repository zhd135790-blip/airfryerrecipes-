import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Air Fryer FAQ - Common Questions & Answers | Air Fryer Recipes',
  description: 'Get answers to the most common air fryer questions! Learn about cooking times, temperatures, maintenance, and troubleshooting for your air fryer.',
  keywords: 'air fryer FAQ, air fryer questions, air fryer troubleshooting, air fryer tips, air fryer cooking guide',
  openGraph: {
    title: 'Air Fryer FAQ - Common Questions & Answers',
    description: 'Everything you need to know about air fryers! Get expert answers to common questions about cooking, maintenance, and troubleshooting.',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is an air fryer and how does it work?",
          answer: "An air fryer is a kitchen appliance that cooks food by circulating hot air around it at high speed. It uses convection heating to create a crispy exterior similar to deep frying but with up to 75% less oil. The rapid air circulation cooks food evenly and quickly, making it perfect for healthy cooking."
        },
        {
          question: "Do I need to preheat my air fryer?",
          answer: "Yes, preheating your air fryer for 3 minutes before cooking ensures even cooking and better results. This is especially important for recipes like air fryer chicken breast and air fryer salmon recipes where consistent temperature is crucial for perfect doneness."
        },
        {
          question: "How much oil should I use in an air fryer?",
          answer: "You only need 1-2 teaspoons of oil for most recipes, compared to the 2-3 tablespoons used in traditional frying. For best results, lightly brush or spray oil on food rather than pouring it. Many healthy air fryer recipes can be made with just cooking spray."
        }
      ]
    },
    {
      category: "Cooking Times & Temperatures",
      questions: [
        {
          question: "What temperature should I use for air fryer chicken recipes?",
          answer: "For air fryer chicken breast recipes, use 375°F for 18-20 minutes. For air fryer chicken wings recipe, use 380°F for 22-25 minutes. Always check internal temperature reaches 165°F with a meat thermometer for food safety."
        },
        {
          question: "How long does it take to cook salmon in an air fryer?",
          answer: "For a perfect air fryer salmon recipe, cook at 400°F for 10-12 minutes for 1-inch thick fillets. The internal temperature should reach 145°F. Salmon air fryer recipe cooking time varies slightly based on thickness - thicker fillets may need 15-18 minutes."
        },
        {
          question: "What's the best temperature for air fryer vegetables?",
          answer: "Most vegetables cook well at 400°F. Air fryer broccoli recipe takes 6-8 minutes, while air fryer cauliflower recipes need 12-15 minutes. The key is to shake the basket halfway through cooking for even browning."
        }
      ]
    },
    {
      category: "Popular Recipes",
      questions: [
        {
          question: "What are the best air fryer recipes for beginners?",
          answer: "Start with these easy air fryer recipes: air fryer bacon (10 minutes), air fryer broccoli (8 minutes), and air fryer chicken breast (20 minutes). These simple recipes will help you learn your air fryer's capabilities and build confidence."
        },
        {
          question: "How do I make crispy chicken wings in an air fryer?",
          answer: "For the best air fryer chicken wings recipe: pat wings dry, season generously, cook at 380°F for 22-25 minutes, flipping halfway through. Don't overcrowd the basket and ensure wings are in a single layer for maximum crispiness."
        },
        {
          question: "Can I cook frozen food in an air fryer?",
          answer: "Yes! Frozen foods like fries, chicken nuggets, and vegetables work great in air fryers. Add 2-3 minutes to the cooking time and shake the basket halfway through. Frozen air fryer recipes often turn out crispier than traditional oven cooking."
        }
      ]
    },
    {
      category: "Health & Nutrition",
      questions: [
        {
          question: "Are air fryer recipes healthy?",
          answer: "Yes! Air fryer recipes are generally healthier because they use 75% less oil than traditional frying while maintaining that crispy texture. Our healthy air fryer recipes like air fryer salmon and air fryer broccoli retain more nutrients and have fewer calories."
        },
        {
          question: "Can air fryer recipes help with weight loss?",
          answer: "Absolutely! Healthy air fryer recipes are perfect for weight loss because they're lower in calories, use minimal oil, and can be made with lean proteins and vegetables. Air fryer chicken breast recipes and air fryer salmon recipes are excellent for meal prep and healthy eating."
        },
        {
          question: "What's the healthiest oil to use in an air fryer?",
          answer: "Extra virgin olive oil, avocado oil, and coconut oil are the healthiest options for air fryer recipes. Use these oils sparingly - just 1-2 teaspoons for most recipes. For even healthier options, use cooking spray or no oil at all for vegetables."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          question: "Why is my air fryer food not crispy?",
          answer: "Ensure you're not overcrowding the basket, preheat the air fryer, pat food dry before cooking, and use the right temperature. For crispy results, don't flip food too early and allow proper air circulation around each piece."
        },
        {
          question: "My air fryer is smoking - what should I do?",
          answer: "Smoking usually indicates too much oil or food debris. Clean the air fryer thoroughly, reduce oil usage, and ensure the heating element is clean. Avoid cooking high-fat foods like bacon without proper ventilation."
        },
        {
          question: "Why is my air fryer food burning?",
          answer: "Food burning can be caused by too high temperature, cooking too long, or not shaking/flipping food. Check cooking times for your specific air fryer model and reduce temperature by 25°F if food browns too quickly."
        }
      ]
    },
    {
      category: "Maintenance & Care",
      questions: [
        {
          question: "How often should I clean my air fryer?",
          answer: "Clean the basket and tray after each use with warm soapy water. Deep clean the heating element and fan monthly. Regular cleaning ensures optimal performance and prevents smoke or burning smells during cooking."
        },
        {
          question: "Can I put my air fryer basket in the dishwasher?",
          answer: "Most air fryer baskets are dishwasher safe, but check your manual first. Hand washing with warm soapy water is often recommended to preserve the non-stick coating and extend the life of your air fryer accessories."
        },
        {
          question: "How long do air fryers typically last?",
          answer: "With proper care, air fryers typically last 3-5 years. Regular cleaning, avoiding harsh chemicals, and not overfilling the basket will help extend your air fryer's lifespan and maintain optimal cooking performance."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Air Fryer FAQ - Common Questions & Answers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert answers to the most common air fryer questions! From cooking techniques to maintenance tips, 
              find everything you need to know about using your air fryer effectively.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a href="#getting-started" className="text-blue-600 hover:text-blue-800 font-medium">Getting Started</a>
              <a href="#cooking-times" className="text-blue-600 hover:text-blue-800 font-medium">Cooking Times</a>
              <a href="#popular-recipes" className="text-blue-600 hover:text-blue-800 font-medium">Popular Recipes</a>
              <a href="#health-nutrition" className="text-blue-600 hover:text-blue-800 font-medium">Health & Nutrition</a>
              <a href="#troubleshooting" className="text-blue-600 hover:text-blue-800 font-medium">Troubleshooting</a>
              <a href="#maintenance" className="text-blue-600 hover:text-blue-800 font-medium">Maintenance</a>
            </div>
          </div>

          {/* FAQ Sections */}
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 
                id={section.category.toLowerCase().replace(/\s+/g, '-')}
                className="text-3xl font-display font-bold text-gray-900 mb-8 border-b-2 border-orange-500 pb-2"
              >
                {section.category}
              </h2>
              
              <div className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    <div className="ml-9">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Related Resources */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h2 className="text-3xl font-display font-bold text-blue-800 mb-6">
              Related Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Best Air Fryer Recipes</h3>
                <p className="text-gray-600 text-sm mb-4">Discover our top-rated air fryer recipes for every meal</p>
                <a href="/collections/best-air-fryer-recipes" className="text-blue-600 font-medium hover:text-blue-800">
                  View Collection →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Recipes Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Perfect for beginners - simple recipes to get started</p>
                <a href="/collections/easy-air-fryer-recipes" className="text-blue-600 font-medium hover:text-blue-800">
                  View Collection →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Chicken Cooking Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Master the art of cooking chicken in your air fryer</p>
                <a href="/guides/air-fryer-chicken-guide" className="text-blue-600 font-medium hover:text-blue-800">
                  View Guide →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 text-center bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Check out our recipe collections and cooking guides, 
              or explore our detailed air fryer recipes for step-by-step instructions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/recipes" 
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
              >
                Browse All Recipes
              </a>
              <a 
                href="/guides" 
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors"
              >
                View Cooking Guides
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
