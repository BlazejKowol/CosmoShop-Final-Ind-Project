import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      mark: 'Resibo',
      title: 'Dream Cream',
      image1: 'image.jpg',
      image2: 'image.jpg',
      image3: 'image.jpg',
      price: 89,
      category: 'Twarz',
      description: 'Idealna kompozycja dla bardzo wymagającej skóry',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      mark: 'ASOA',
      title: 'Peeling Z Olejem Macadamia',
      image1: 'image.jpg',
      image2: 'image.jpg',
      image3: 'image.jpg',
      price: 52,
      category: 'Ciało',
      description: 'Peeling cukrowy Pomarańcza i Makadamia ASOA powstał z naturalnych składników',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      mark: 'Yope',
      title: 'Odżywka do włosów z proteinami',
      image1: 'image.jpg',
      image2: 'image.jpg',
      image3: 'image.jpg',
      price: 23,
      category: 'Włosy',
      description: 'Wzmacnia, regeneruje i wygładza włosy',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      mark: 'Vianek',
      title: 'Nawilżający krem do rąk',
      image1: 'image.jpg',
      image2: 'image.jpg',
      image3: 'image.jpg',
      price: 25,
      category: 'Ciało',
      description: 'Lekki krem do rąk z mocznikiem (5%), do codziennego używania w domu lub podróży',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      mark: 'Sensum Mare',
      title: 'Serum pod oczy Algoeye',
      image1: 'image.jpg',
      image2: 'image.jpg',
      image3: 'image.jpg',
      price: 130,
      category: 'Twarz',
      description: 'Codzienna pielęgnacja wymagającej skóry wokół oczu',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc46-c222c8a17260',
      email: 'Dan@example.com',
      name: 'Dan Bewley',
      address: 'Paderewskiego 7/10',
      code: '50-555',
      city: 'Wroclaw',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc46-c333c8a17260',
      email: 'Tai@example.com',
      name: 'Tai Woffinden',
      address: 'Olimpijska 7/10',
      code: '52-456',
      city: 'Olawa',
    }
  ]
}

function getOrders() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      clientId: 'fd105551-0f0d-4a9f-bc46-c222c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: 'fd105551-0f0d-4a9f-bc46-c222c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      clientId: 'fd105551-0f0d-4a9f-bc46-c333c8a17260',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product })
    }),
  );
  
  await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client })
    }),
  );

  await Promise.all(
    getOrders().map(({ clientId, productId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          client: {
            connect: { id: clientId },
          },
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );
}

seed();