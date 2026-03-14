const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const products = [
  {
    name: "Montblanc Meisterstück Fountain Pen",
    description: "The Meisterstück Classique in deep black precious resin with elegant platinum-coated details, surmounted by the white Montblanc emblem.",
    price: 650,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=800",
    brand: "Montblanc"
  },
  {
    name: "Rolex Submariner Date",
    description: "The Oyster Perpetual Submariner Date in Oystersteel with a Cerachrom bezel insert in black ceramic and a black dial with large luminescent hour markers.",
    price: 10250,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
    brand: "Rolex"
  },
  {
    name: "Louis Vuitton Keepall Bandoulière 50",
    description: "An icon since the appearance in 1930, the Keepall embodies the spirit of modern travel. Elegant and enduring in Monogram canvas.",
    price: 2550,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    brand: "Louis Vuitton"
  },
  {
    name: "Cartier Love Bracelet",
    description: "Born in New York in the 1970s, the LOVE collection remains today an iconic symbol of love that transgresses convention.",
    price: 6900,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    brand: "Cartier"
  }
];

const users = [
  {
    name: "Admin User",
    email: "admin@luxury.com",
    password: "password123"
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
