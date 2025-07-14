import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingSection() {
  const plans = [{
    name: 'Silver',
    price: '20',
    period: 'month',
    devices: '1 device',
    features: ['5 OTT Platforms', '3,000 Live Channels', 'HD streaming', '1 device access', 'Movies & TV shows', 'Live sports events', 'Cancel anytime'],
    popular: false
  }, {
    name: 'Gold',
    price: '220',
    period: 'year',
    devices: '1 device',
    features: ['8 OTT Platforms', '5,000+ Live Channels', '4K Ultra HD', '1 device access', 'Movies & TV shows', 'Live sports events', 'EPG support', 'Catch-up TV',],
    popular: true
  }, {
    name: 'Platinum',
    price: '340',
    period: '2 years',
    devices: '2 devices',
    features: ['10+ OTT Platforms', '8,000+ Live Channels', '4K Ultra HD', '2 devices access', 'Movies & TV shows', 'Live sports events', 'EPG support', 'Catch-up TV', 'Multi-device streaming',],
    popular: false
  }, {
    name: 'Diamond',
    price: '500',
    period: '5 years',
    devices: '3 devices',
    features: ['12+ OTT Platforms', '10,000+ Live Channels', '4K Ultra HD', '3 devices access', 'Movies & TV shows', 'Live sports events', 'EPG support', 'Catch-up TV', 'Multi-device streaming', 'Premium support',],
    popular: false
  }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <>
      {/* Structured Data for Pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Star4KTV IPTV Streaming Service",
            "description": "Premium IPTV streaming service with live channels and OTT platforms",
            "image": "https://star4ktv.com/st.png",
            "brand": {
              "@type": "Brand",
              "name": "Star4KTV"
            },
            "offers": plans.map(plan => ({
              "@type": "Offer",
              "name": `${plan.name} Plan`,
              "description": `Star4KTV ${plan.name} plan with ${plan.features.join(', ')}`,
              "price": plan.price,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-27",
              "priceValidUntil": "2025-12-31",
              "url": "https://star4ktv.com/#pricing",
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 0,
                    "unitCode": "DAY"
                  },
                  "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 0,
                    "unitCode": "DAY"
                  }
                }
              },
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "US",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": 30,
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/FreeReturn"
              }
            }))
          })
        }}
      />
      
      <motion.div 
        id="pricing" 
        className="py-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/5 via-transparent to-purple-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your Plan
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Select the perfect plan for your entertainment needs with our flexible pricing options
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-6"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`group relative overflow-visible rounded-2xl backdrop-blur-xl border transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#E50914]/20 via-[#E50914]/10 to-transparent border-[#E50914]/30 shadow-2xl shadow-[#E50914]/20' 
                  : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl'
              } ${plan.popular ? 'mt-6' : 'mt-12'}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              custom={index}
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
              
              {/* Most Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg border border-yellow-300/30 backdrop-blur-sm whitespace-nowrap"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(255, 193, 7, 0.3)",
                        "0 0 30px rgba(255, 193, 7, 0.5)",
                        "0 0 20px rgba(255, 193, 7, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Most Popular
                  </motion.div>
                </motion.div>
              )}

              <div className="relative z-10 p-8">
                {/* Plan Header */}
                <motion.div 
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.h3 
                    className={`text-2xl font-bold mb-3 ${
                      plan.popular ? 'text-white' : 'text-gray-100'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className={`text-4xl md:text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-100'
                    }`}>
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">/{plan.period}</span>
                  </motion.div>
                  
                  <motion.div 
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                      plan.popular 
                        ? 'bg-white/20 text-white border border-white/30' 
                        : 'bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.devices}
                  </motion.div>
                </motion.div>

                {/* Features List */}
                <motion.div 
                  className="space-y-4 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                >
                  {plan.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center"
                      variants={featureVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                          plan.popular 
                            ? 'bg-white/20 border border-white/30' 
                            : 'bg-[#E50914]/20 border border-[#E50914]/30'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check size={12} className={plan.popular ? 'text-white' : 'text-[#E50914]'} />
                      </motion.div>
                      <span className={`text-sm ${
                        plan.popular ? 'text-gray-100' : 'text-gray-300'
                      }`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.a 
                  href={`https://wa.me/12108073482?text=Hello%20Star4KTV%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20subscribing%20to%20the%20${plan.name}%20plan%20for%20$${plan.price}/${plan.period}.%0D%0A%0D%0APlease%20provide%20me%20with%20the%20setup%20instructions%20and%20payment%20details.%0D%0A%0D%0AThank%20you%21%0D%0A%0D%0ABest%20regards`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border relative overflow-hidden group/btn text-center block ${
                    plan.popular 
                      ? 'bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl' 
                      : 'bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white border-transparent shadow-lg hover:shadow-xl hover:shadow-[#E50914]/25'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* Button shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                  <span className="relative z-10">Choose {plan.name}</span>
                </motion.a>
              </div>

              {/* Bottom glow effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${
                plan.popular 
                  ? 'from-transparent via-white/50 to-transparent' 
                  : 'from-transparent via-[#E50914]/50 to-transparent'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p 
            className="text-gray-400 mb-6"
            whileInView={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            All plans include our 30-day money-back guarantee and customer support 9 hours 6 days a week
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['No setup fees', 'Cancel anytime', 'Instant activation'].map((text) => (
              <motion.span 
                key={text}
                className="flex items-center"
                variants={featureVariants}
                whileHover={{ scale: 1.1, color: '#10B981' }}
                transition={{ duration: 0.2 }}
              >
                <Check size={16} className="mr-2 text-green-400" />
                {text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
}