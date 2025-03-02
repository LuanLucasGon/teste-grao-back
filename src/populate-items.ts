import mongoose from 'mongoose';
import RestaurantModel from './models/RestaurantModels';
import MenuItemsModel from './models/MenuItemsModel';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/teste-grao');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

const createMenuItems = async () => {
  const restaurants = await RestaurantModel.find();

  if (restaurants.length === 0) {
    console.log('No restaurants found in the database!');
    return;
  }

  const menuItems = await MenuItemsModel.create([
    {
      restaurant: restaurants[0]._id,
      name: 'Picanha',
      description: 'A famosa picanha no espeto, acompanhada de farofa e vinagrete.',
      price: 89.90,
      category: 'Churrasco',
      imageUrl: 'assets/images/categories/churrasco.png',
      available: true,
    },
    {
      restaurant: restaurants[1]._id,
      name: 'Feijão Tropeiro',
      description: 'Feijão tropeiro com torresmo, arroz e couve refogada.',
      price: 29.90,
      category: 'Prato Principal',
      imageUrl: 'http://example.com/feijaotropeiro.png',
      available: true,
    },
    {
      restaurant: restaurants[2]._id,
      name: 'Moqueca de Peixe',
      description: 'Moqueca de peixe feita com leite de coco e dendê.',
      price: 59.90,
      category: 'Peixes e Frutos do Mar',
      imageUrl: 'http://example.com/moqueca.png',
      available: true,
    },
    {
      restaurant: restaurants[3]._id,
      name: 'Porco à Paraguaia',
      description: 'Porco assado com molho especial, acompanhado de arroz e farofa.',
      price: 49.90,
      category: 'Carnes',
      imageUrl: 'assets/images/categories/churrasco.png',
      available: true,
    },
    {
      restaurant: restaurants[4]._id,
      name: 'Acarajé',
      description: 'Acarajé com vatapá, caruru e camarão.',
      price: 25.00,
      category: 'Comida Baiana',
      imageUrl: 'http://example.com/acaraje.png',
      available: true,
    },
  ]);
};

const run = async () => {
  await connectDB();
  await createMenuItems();
  mongoose.connection.close();
};

run().catch((err) => console.error('Error during creation', err));
