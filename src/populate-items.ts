import mongoose from 'mongoose'; // Supondo que você exportou os modelos de Restaurante e MenuItem corretamente
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
  // Buscar os restaurantes já criados para associar os itens de menu
  const restaurants = await RestaurantModel.find();

  if (restaurants.length === 0) {
    console.log('No restaurants found in the database!');
    return;
  }

  // Criar os itens de menu para cada restaurante
  const menuItems = await MenuItemsModel.create([
    {
      restaurant: restaurants[0]._id, // Churrascaria Fogo de Chão
      name: 'Picanha',
      description: 'A famosa picanha no espeto, acompanhada de farofa e vinagrete.',
      price: 89.90,
      category: 'Churrasco',
      imageUrl: 'http://example.com/picanha.png',
      available: true,
    },
    {
      restaurant: restaurants[1]._id, // Bar do Mineiro
      name: 'Feijão Tropeiro',
      description: 'Feijão tropeiro com torresmo, arroz e couve refogada.',
      price: 29.90,
      category: 'Prato Principal',
      imageUrl: 'http://example.com/feijaotropeiro.png',
      available: true,
    },
    {
      restaurant: restaurants[2]._id, // Restaurante Aprazível
      name: 'Moqueca de Peixe',
      description: 'Moqueca de peixe feita com leite de coco e dendê.',
      price: 59.90,
      category: 'Peixes e Frutos do Mar',
      imageUrl: 'http://example.com/moqueca.png',
      available: true,
    },
    {
      restaurant: restaurants[3]._id, // Casa do Porco
      name: 'Porco à Paraguaia',
      description: 'Porco assado com molho especial, acompanhado de arroz e farofa.',
      price: 49.90,
      category: 'Carnes',
      imageUrl: 'http://example.com/porco.png',
      available: true,
    },
    {
      restaurant: restaurants[4]._id, // Acarajé da Regina
      name: 'Acarajé',
      description: 'Acarajé com vatapá, caruru e camarão.',
      price: 25.00,
      category: 'Comida Baiana',
      imageUrl: 'http://example.com/acaraje.png',
      available: true,
    },
  ]);

  console.log('Menu items created:', menuItems);
};

const run = async () => {
  await connectDB();
  await createMenuItems();
  mongoose.connection.close(); // Fecha a conexão após a operação
};

run().catch((err) => console.error('Error during creation', err));
