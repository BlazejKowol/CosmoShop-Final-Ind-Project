import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      mark: 'Resibo',
      title: 'Dream Cream na noc i dzień, rewitalizujący',
      image1: 'Resibo1.jpg',
      image2: 'Resibo2.jpg',
      image3: 'Resibo3.jpg',
      price: 89,
      category: 'Twarz',
      description: 'Idealna kompozycja dla bardzo wymagającej skóry',
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      mark: 'ASOA',
      title: 'Peeling Z Olejem Macadamia i zapachem figowym',
      image1: 'Asoa1.jpg',
      image2: 'Asoa2.jpg',
      image3: 'Asoa3.jpg',
      price: 52,
      category: 'Ciało',
      description: 'Peeling cukrowy Pomarańcza i Makadamia ASOA powstał z naturalnych składników',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      mark: 'Yope',
      title: 'Odżywka do włosów z proteinami i jonami srebra',
      image1: 'Yope1.jpg',
      image2: 'Yope2.jpg',
      image3: 'Yope3.jpg',
      price: 23,
      category: 'Włosy',
      description: 'Wzmacnia, regeneruje i wygładza włosy',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      mark: 'Vianek',
      title: 'Nawilżający krem do rąk dla skóry suchej',
      image1: 'Vianek1.jpg',
      image2: 'Vianek2.jpg',
      image3: 'Vianek3.jpg',
      price: 25,
      category: 'Ciało',
      description: 'Lekki krem do rąk z mocznikiem (5%), do codziennego używania w domu lub podróży',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      mark: 'Sensum Mare',
      title: 'Serum pod oczy Algoeye 30+ przeciwzmarszczkowy',
      image1: 'SensumMare1.jpg',
      image2: 'SensumMare2.jpg',
      image3: 'SensumMare3.jpg',
      price: 130,
      category: 'Twarz',
      description: 'Codzienna pielęgnacja wymagającej skóry wokół oczu',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2e9',
      mark: 'Veoli Botanica',
      title: 'BUILD ME UP Nawilżająco-odbudowujący tonik z ceramidami',
      image1: 'Veoli1.jpg',
      image2: 'Veoli2.jpg',
      image3: 'Veoli3.jpg',
      price: 60,
      category: 'Twarz',
      description: 'Tonik, ale sugerujemy by go potraktować jako serum - wspomaga odbudowę i wzmocnienie bariery lipidowej naskórka',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936b4s1',
      mark: 'Ministerstwo Dobrego Mydła',
      title: 'Mydło w kostce - Hibiskus, 100 g',
      image1: 'Ministerstwo1.jpg',
      image2: 'Ministerstwo2.jpg',
      image3: 'Ministerstwo3.jpg',
      price: 24,
      category: 'Ciało',
      description: 'Oczyszcza i łatwo usuwa zanieczyszczenia ze skóry. Pozostawia skórę nawilżoną, gładką, świeżą',
    },
    {
      id: '01c7599d-318b-4b9f-baf7-66g6a936b4s1',
      mark: 'GoCranberry',
      title: 'Żurawinowa pianka do mycia twarzy, 100 g',
      image1: 'Go1.jpg',
      image2: 'Go2.jpg',
      image3: 'Go3.jpg',
      price: 28,
      category: 'Twarz',
      description: 'Delikatna pianka do mycia twarzy przeznaczona jest dla każdego typu skóry',
    },
  ];
}

function getClients() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc46-c222c8a17260',
      email: 'Dan@example.com',
      name: 'Dan',
      surname: 'Bewley',
      address: 'Paderewskiego 7/10',
      code: '50-555',
      city: 'Wroclaw',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc46-c333c8a17260',
      email: 'Tai@example.com',
      name: 'Tai',
      surname: 'Woffinden',
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
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      totalPrice: 50,
      comment: ''
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      clientId: 'fd105551-0f0d-4a9f-bc46-c222c8a17260',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      totalPrice: 80,
      comment: 'hi'
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      clientId: 'fd105551-0f0d-4a9f-bc46-c333c8a17260',
      productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      totalPrice: 70,
      comment: 'hello'
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product })
    }),
  );
}
  
/*   await Promise.all(
    getClients().map((client) => {
      return db.client.create({ data: client })
    }),
  );

  await Promise.all(
    getOrders().map(({ productId, ...orderData }) => {
      return db.order.create({
        data: {
          ...orderData,
          product: {
            connect: { id: productId },
          },
        },
      });
    }),
  );
} */

seed();