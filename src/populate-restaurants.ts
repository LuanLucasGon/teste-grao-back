import mongoose from 'mongoose';
import RestaurantModel from './models/RestaurantModels';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/teste-grao');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

const createRestaurants = async () => {
  // Criar 5 restaurantes
  const restaurants = await RestaurantModel.create([
    {
      name: 'Churrascaria Fogo de Chão',
      category: 'Churrasco',
      address: 'Avenida Paulista, 1000, São Paulo, SP',
      phone: '(11) 3000-0000',
      rating: '4.9',
      description: 'A verdadeira experiência do churrasco brasileiro.',
      iconUrl: 'assets/images/restaurant1.png',
      coverUrl: 'assets/images/coverphotos/cover1.pngg',
      menuItem: [],
    },
    {
      name: 'Bar do Mineiro',
      category: 'Comida Mineira',
      address: 'Rua do Ouvidor, 200, Rio de Janeiro, RJ',
      phone: '(21) 2222-2222',
      rating: '4.8',
      description: 'Comida típica mineira com um toque especial.',
      iconUrl: 'assets/images/restaurant1.png',
      coverUrl: 'assets/images/coverphotos/cover1.png',
      menuItem: [],
    },
    {
      name: 'Restaurante Aprazível',
      category: 'Cozinha Brasileira',
      address: 'Rua Aprazível, 55, Rio de Janeiro, RJ',
      phone: '(21) 2245-1234',
      rating: '4.7',
      description: 'Restaurante com vista panorâmica e pratos típicos do Brasil.',
      iconUrl: 'assets/images/restaurant2.png',
      coverUrl: 'assets/images/coverphotos/cover1.png',
      menuItem: [],
    },
    {
      name: 'Casa do Porco',
      category: 'Comida de Boteco',
      address: 'Rua Araújo, 124, São Paulo, SP',
      phone: '(11) 3105-7335',
      rating: '4.8',
      description: 'Pratos típicos de boteco com um toque gourmet.',
      iconUrl: 'assets/images/restaurant3.png',
      coverUrl: 'assets/images/coverphotos/cover1.png',
      menuItem: [],
    },
    {
      name: 'Acarajé da Regina',
      category: 'Comida Baiana',
      address: 'Praça Castro Alves, 32, Salvador, BA',
      phone: '(71) 3333-5555',
      rating: '4.6',
      description: 'A verdadeira comida baiana, com destaque para o acarajé.',
      iconUrl: 'assets/images/restaurant1.png',
      coverUrl: 'assets/images/coverphotos/cover1.png',
      menuItem: [],
    }
  ]);

  console.log('Restaurants created:', restaurants);
};

const run = async () => {
  await connectDB();
  await createRestaurants();
  mongoose.connection.close();
};

run().catch((err) => console.error('Error during creation', err));
