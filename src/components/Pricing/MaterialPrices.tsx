import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Architecture',
    icon: '🏗️',
    qocept: [
      'Architectural Layout | 2D',
      'Architectural Visualisation | 3D',
      'Structural Design | 2D Upto 5 Design options',
      'Basic Elevation',
      'Structural Design',
      '3D Elevation',
      'Electrical Drawings',
      'Plumbing Drawings',
      'Furniture Plan'
    ],
    market: [
      'Architectural Layout | 2D',
      'Architectural Visualisation | 3D',
      'Structural Design | 2D Upto 5 Design options',
      'Basic Elevation',
      'Structural Design',
      '3D Elevation',
      'Electrical Drawings',
      'Plumbing Drawings',
      'Furniture Plan'
    ]
  },
  {
    title: 'Structure',
    icon: '🏢',
    qocept: [
      'Steel - JSW steel, TATA or equivalent',
      'Aggregates - 20mm & 40mm',
      'Blocks - Standard Solid Concrete blocks, 6 inch 4 inch',
      'Cement - ACC, Birla or equivalent of Grade - 43or 53',
      'RCC Design Mix - As per the structural designer recommendation',
      'Ceiling Height - 10 feet'
    ],
    market: [
      'Steel - JSW steel, TATA or equivalent',
      'Aggregates - 20mm & 40mm',
      'Blocks - Standard Solid Concrete blocks, 6 inch 4 inch',
      'Cement - ACC, Birla or equivalent of Grade - 43or 53',
      'RCC Design Mix - As per the structural designer recommendation',
      'Ceiling Height - 10 feet'
    ]
  },
  {
    title: 'Kitchen',
    icon: '🍳',
    qocept: [
      'Ceramic Wall Tiles (3 feet above kitchen slab) - Upto Rs.110 per Sqft',
      'Main Sink Faucet - Upto Rs.5500',
      'Any Other Faucet & Accessories - Jaquar/Parryware/Hindware',
      'Kitchen Sink - Stainless Steel Single Sink or Granite finish worth Rs.13,000/- (Futura, Carysil)'
    ],
    market: [
      'Ceramic Wall Tiles (2 feet above kitchen slab) - Upto Rs.90 per Sqft',
      'Main Sink Faucet - Upto Rs.3500',
      'Any Other Faucet & Accessories - Jaquar/Parryware/Hindware',
      'Kitchen Sink - Stainless Steel Single Sink or Granite finish worth Rs.8000/- (Futura, Carysil)'
    ]
  },
  {
    title: 'Bathroom',
    icon: '🚿',
    qocept: [
      'Bathroom Ceramic Wall Tiles with 10 feet height - Upto Rs.110 per Sqft',
      'Sanitary ware & Jaquar Fittings - Upto Rs.100000 per 1200 sqft of construction',
      'CPVC Pipe - Ashirwad / Supreme or equivalent',
      'Bathroom doors - Designer bathroom Doors',
      'Mirror, Soap Dish, Towel Rail -Worth ₹15000 till 1200 ft of construction'
    ],
    market: [
      'Bathroom Ceramic Wall Tiles with 7 feet height - Upto Rs.90 per Sqft',
      'Sanitary ware & CP Fittings - Upto Rs.80000 per 1000 sqft of construction',
      'CPVC Pipe - Ashirwad / Supreme or equivalent',
      'Bathroom doors - Waterproof flush doors',
      'Mirror, Soap Dish, Towel Rail - Worth ₹9000 till 1000 ft of construction'
    ]
  },
  {
    title: 'Flooring',
    icon: '🏗️',
    qocept: [
      'Living and Dining Flooring - Tiles or Granite or Marble of value upto Rs.200 persqft',
      'Rooms and Kitchen Flooring - Tiles or Granite or Marble upto Rs.160 persqft',
      'Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.120 per sqft',
      'Staircase Flooring - Sadarahalli Granite of value upto ₹ 160 per sqft',
      'Parking Tiles - Anti-skid tiles of value upto ₹100 per sqft'
    ],
    market: [
      'Living and Dining Flooring - Tiles or Granite or Marble of value upto Rs.160 persqft',
      'Rooms and Kitchen Flooring - Tiles or Granite or Marble upto Rs.140 per sqft',
      'Balcony and Open Areas Flooring - Anti-skid tiles of value upto Rs.90 per sqft',
      'Staircase Flooring - Sadarahalli Granite of value upto ₹ 140 per sqft',
      'Parking Tiles - Anti-skid tiles of value upto ₹70 per sqft'
    ]
  },
  {
    title: 'Electrical',
    icon: '⚡',
    qocept: [
      'Wires - Fireproof wires by Finolex',
      'Switches & Sockets - GM Modular / Legrand / Wipro / L&T'
    ],
    market: [
      'Wires - Fireproof wires by Finolex',
      'Switches & Sockets - GM Modular / Legrand'
    ]
  }
];

const MaterialPrices = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Material Prices Comparison</h2>
          <p className="text-gray-600">Compare our prices with market rates</p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 divide-x divide-gray-100">
                <div className="p-6">
                  <div className="bg-[#002B5B] text-white px-4 py-2 rounded-md inline-block mb-4">
                    QOCEPT 360 / RATE PER SQFT RS.1,799.00
                  </div>
                  <ul className="space-y-3">
                    {category.qocept.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF8C00] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-800 text-white px-4 py-2 rounded-md inline-block mb-4">
                    MARKET PRICE / RATE PER SQFT RS.2,200+
                  </div>
                  <ul className="space-y-3">
                    {category.market.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialPrices;