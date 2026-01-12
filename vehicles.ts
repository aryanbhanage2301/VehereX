export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  price: number;
  priceRange: string;
  range: number;
  chargingTime: string;
  bodyType: string;
  image: string;
  specifications: {
    batteryCapacity: string;
    motorPower: string;
    topSpeed: string;
    acceleration: string;
    seatingCapacity: number;
    chargingPort: string;
    warranty: string;
  };
  features: string[];
  isElectric: boolean;
  fuelType?: string;
  mileage?: number;
  fuelTankCapacity?: string;
  costPerKm: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  models: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Nexon EV',
    brand: 'Tata',
    price: 1599000,
    priceRange: '15.99 - 19.99 Lakh',
    range: 312,
    chargingTime: '8.5 hours (AC)',
    bodyType: 'SUV',
    image: '/images/tata-nexon-ev.jpg',
    specifications: {
      batteryCapacity: '40.5 kWh',
      motorPower: '129 PS',
      topSpeed: '120 km/h',
      acceleration: '0-100 km/h in 9.9s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['Auto Climate Control', 'Sunroof', 'Connected Car Tech', 'Multi-Drive Modes'],
    isElectric: true,
    costPerKm: 1.2
  },
  {
    id: '2',
    name: 'ZS EV',
    brand: 'MG',
    price: 2588000,
    priceRange: '25.88 - 28.88 Lakh',
    range: 461,
    chargingTime: '7 hours (AC)',
    bodyType: 'SUV',
    image: '/images/mg-zs-ev.jpg',
    specifications: {
      batteryCapacity: '50.3 kWh',
      motorPower: '176 PS',
      topSpeed: '140 km/h',
      acceleration: '0-100 km/h in 8.5s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.5 lakh km'
    },
    features: ['Panoramic Sunroof', 'PM2.5 Air Filter', 'i-SMART EV 2.0', 'Wireless Charging'],
    isElectric: true,
    costPerKm: 1.5
  },
  {
    id: '3',
    name: 'XUV400 EV',
    brand: 'Mahindra',
    price: 1595000,
    priceRange: '15.95 - 17.95 Lakh',
    range: 456,
    chargingTime: '6.5 hours (AC)',
    bodyType: 'SUV',
    image: '/images/mahindra-xuv400.jpg',
    specifications: {
      batteryCapacity: '39.4 kWh',
      motorPower: '150 PS',
      topSpeed: '150 km/h',
      acceleration: '0-100 km/h in 8.3s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['AdrenoX Connect', 'Dual Zone Climate Control', 'Wireless Phone Charger', 'Multiple Drive Modes'],
    isElectric: true,
    costPerKm: 1.3
  },
  {
    id: '4',
    name: 'Tigor EV',
    brand: 'Tata',
    price: 1199000,
    priceRange: '11.99 - 13.49 Lakh',
    range: 306,
    chargingTime: '8.5 hours (AC)',
    bodyType: 'Sedan',
    image: '/images/tata-tigor-ev.jpg',
    specifications: {
      batteryCapacity: '26 kWh',
      motorPower: '75 PS',
      topSpeed: '120 km/h',
      acceleration: '0-100 km/h in 12.2s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['Zconnect App', 'Dual Airbags', 'ABS with EBD', 'Reverse Parking Camera'],
    isElectric: true,
    costPerKm: 1.0
  },
  {
    id: '5',
    name: 'Nexon Petrol',
    brand: 'Tata',
    price: 799000,
    priceRange: '7.99 - 14.99 Lakh',
    range: 0,
    chargingTime: 'N/A',
    bodyType: 'SUV',
    image: '/images/tata-nexon-petrol.jpg',
    specifications: {
      batteryCapacity: 'N/A',
      motorPower: '120 PS',
      topSpeed: '180 km/h',
      acceleration: '0-100 km/h in 10.2s',
      seatingCapacity: 5,
      chargingPort: 'N/A',
      warranty: '3 years/1 lakh km'
    },
    features: ['Harman Infotainment', 'Auto Climate Control', 'Sunroof', 'Multi-Drive Modes'],
    isElectric: false,
    fuelType: 'Petrol',
    mileage: 17,
    fuelTankCapacity: '44L',
    costPerKm: 6.2
  },
  {
    id: '6',
    name: 'Kona Electric',
    brand: 'Hyundai',
    price: 2370000,
    priceRange: '23.70 - 24.70 Lakh',
    range: 452,
    chargingTime: '6.1 hours (AC)',
    bodyType: 'SUV',
    image: '/images/hyundai-kona-electric.jpg',
    specifications: {
      batteryCapacity: '39.2 kWh',
      motorPower: '136 PS',
      topSpeed: '167 km/h',
      acceleration: '0-100 km/h in 9.7s',
      seatingCapacity: 5,
      chargingPort: 'Type-2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['Climate Control', 'Wireless Phone Charging', 'Electric Sunroof', 'Dual Front Airbags'],
    isElectric: true,
    costPerKm: 1.1
  },
  {
    id: '7',
    name: 'Ioniq 5',
    brand: 'Hyundai',
    price: 4499000,
    priceRange: '44.99 - 47.99 Lakh',
    range: 631,
    chargingTime: '5.6 hours (AC)',
    bodyType: 'Hatchback',
    image: '/images/hyundai-ioniq-5.jpg',
    specifications: {
      batteryCapacity: '72.6 kWh',
      motorPower: '217 PS',
      topSpeed: '185 km/h',
      acceleration: '0-100 km/h in 5.2s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['Heads-Up Display', '14 Speaker BOSE System', 'Ventilated Front Seats', '360-degree Camera'],
    isElectric: true,
    costPerKm: 1.5
  },
  {
    id: '8',
    name: 'Comet EV',
    brand: 'MG',
    price: 749000,
    priceRange: '7.49 - 9.49 Lakh',
    range: 230,
    chargingTime: '7 hours (AC)',
    bodyType: 'Hatchback',
    image: '/images/mg-comet-ev.jpg',
    specifications: {
      batteryCapacity: '17.3 kWh',
      motorPower: '42 PS',
      topSpeed: '105 km/h',
      acceleration: '0-100 km/h in 6.0s',
      seatingCapacity: 4,
      chargingPort: 'Type-2',
      warranty: '8 years/1.5 lakh km'
    },
    features: ['Smartphone Integration', 'Dual Airbags', 'ABS with EBD', 'Reverse Parking Camera'],
    isElectric: true,
    costPerKm: 0.8
  },
  {
    id: '9',
    name: 'Punch EV',
    brand: 'Tata',
    price: 1099000,
    priceRange: '10.99 - 14.99 Lakh',
    range: 421,
    chargingTime: '9.5 hours (AC)',
    bodyType: 'SUV',
    image: '/images/tata-punch-ev.jpg',
    specifications: {
      batteryCapacity: '35 kWh',
      motorPower: '122 PS',
      topSpeed: '135 km/h',
      acceleration: '0-100 km/h in 9.5s',
      seatingCapacity: 5,
      chargingPort: 'CCS2',
      warranty: '8 years/1.6 lakh km'
    },
    features: ['Connected Car Features', 'Automatic Climate Control', 'Driving Modes', 'Cruise Control'],
    isElectric: true,
    costPerKm: 1.1
  },
  {
    id: '10',
    name: 'Creta Diesel',
    brand: 'Hyundai',
    price: 1099000,
    priceRange: '10.99 - 18.99 Lakh',
    range: 0,
    chargingTime: 'N/A',
    bodyType: 'SUV',
    image: '/images/hyundai-creta-diesel.jpg',
    specifications: {
      batteryCapacity: 'N/A',
      motorPower: '115 PS',
      topSpeed: '180 km/h',
      acceleration: '0-100 km/h in 10.8s',
      seatingCapacity: 5,
      chargingPort: 'N/A',
      warranty: '3 years/1 lakh km'
    },
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Wireless Charging', 'BOSE Audio System'],
    isElectric: false,
    fuelType: 'Diesel',
    mileage: 21,
    fuelTankCapacity: '50L',
    costPerKm: 4.8
  },
  {
    id: '11',
    name: 'Harrier Diesel',
    brand: 'Tata',
    price: 1549000,
    priceRange: '15.49 - 24.49 Lakh',
    range: 0,
    chargingTime: 'N/A',
    bodyType: 'SUV',
    image: '/images/tata-harrier-diesel.jpg',
    specifications: {
      batteryCapacity: 'N/A',
      motorPower: '170 PS',
      topSpeed: '200 km/h',
      acceleration: '0-100 km/h in 8.8s',
      seatingCapacity: 5,
      chargingPort: 'N/A',
      warranty: '3 years/1 lakh km'
    },
    features: ['JBL Audio System', 'Panoramic Sunroof', 'Terrain Response Modes', 'iRA Connected Features'],
    isElectric: false,
    fuelType: 'Diesel',
    mileage: 16,
    fuelTankCapacity: '50L',
    costPerKm: 6.3
  },
  {
    id: '12',
    name: 'Seltos Petrol',
    brand: 'Kia',
    price: 1069000,
    priceRange: '10.69 - 18.69 Lakh',
    range: 0,
    chargingTime: 'N/A',
    bodyType: 'SUV',
    image: '/images/kia-seltos-petrol.jpg',
    specifications: {
      batteryCapacity: 'N/A',
      motorPower: '115 PS',
      topSpeed: '170 km/h',
      acceleration: '0-100 km/h in 10.1s',
      seatingCapacity: 5,
      chargingPort: 'N/A',
      warranty: '3 years/1 lakh km'
    },
    features: ['UVO Connect', 'Wireless Charging', 'Ambient Lighting', 'Sound Mood Lighting'],
    isElectric: false,
    fuelType: 'Petrol',
    mileage: 16,
    fuelTankCapacity: '50L',
    costPerKm: 6.9
  }
];

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Tata',
    logo: '/images/tata-logo.png',
    description: 'Leading Indian automotive manufacturer with a strong EV portfolio',
    website: 'https://www.tatamotors.com',
    models: ['Nexon EV', 'Tigor EV', 'Punch EV']
  },
  {
    id: '2',
    name: 'MG',
    logo: '/images/mg-logo.png',
    description: 'British automotive brand with innovative electric vehicles',
    website: 'https://www.mgmotor.co.in',
    models: ['ZS EV', 'Comet EV']
  },
  {
    id: '3',
    name: 'Mahindra',
    logo: '/images/mahindra-logo.png',
    description: 'Pioneer in Indian automotive industry with sustainable mobility solutions',
    website: 'https://www.mahindra.com',
    models: ['XUV400 EV', 'e2o Plus']
  },
  {
    id: '4',
    name: 'Hyundai',
    logo: '/images/hyundai-logo.png',
    description: 'Korean automotive giant with advanced EV technology',
    website: 'https://www.hyundai.com/in',
    models: ['Kona Electric', 'Ioniq 5']
  },
  {
    id: '5',
    name: 'Kia',
    logo: '/images/kia-logo.png',
    description: 'Korean automobile manufacturer focused on innovation and sustainability',
    website: 'https://www.kia.com/in',
    models: ['Seltos', 'Carens', 'Sonet']
  }
];

export const accessories = [
  {
    id: '1',
    name: 'Home Charging Station',
    price: 25000,
    category: 'Charging',
    image: '/images/home-charger.jpg',
    description: 'Fast 7.4kW AC charging solution for home use'
  },
  {
    id: '2',
    name: 'Portable EV Charger',
    price: 15000,
    category: 'Charging',
    image: '/images/portable-charger.jpg',
    description: 'Emergency charging solution for on-the-go use'
  },
  {
    id: '3',
    name: 'Solar Panel Kit',
    price: 80000,
    category: 'Solar',
    image: '/images/solar-kit.jpg',
    description: 'Complete solar panel system for sustainable charging'
  },
  {
    id: '4',
    name: 'Digital Tire Inflator',
    price: 3500,
    category: 'Maintenance',
    image: '/images/tire-inflator.jpg',
    description: 'Portable tire inflator with digital display'
  }
];
