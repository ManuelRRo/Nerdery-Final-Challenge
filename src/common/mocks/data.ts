import { Brands, CartDetails, Prisma } from 'generated/prisma';

export const brands: Brands[] = [
  {
    id: '0f5c8172-1b16-43c7-b47b-6d0111d307d1',
    name: 'apollo2',
  },
  {
    id: '2e0e9f2e-909f-4cf3-831e-517d9e56e474',
    name: 'wachito',
  },
  {
    id: '3b4695c0-a8be-4066-967a-3181ccd880b0',
    name: 'Puma',
  },
  {
    id: '4610aadb-a1bb-461b-8be2-a0898b580d2f',
    name: 'Nike',
  },
  {
    id: '681b6291-6b25-4ae4-a9c5-19782f37ac00',
    name: 'Rebook',
  },
  {
    id: '9f4a69c9-3b7e-43ee-b54d-4447e9ac6cbb',
    name: 'apollo',
  },
  {
    id: 'e539d3dc-f2f7-40bc-9d3f-7fbb09e16d8e',
    name: 'Reebok',
  },
  {
    id: 'e83a0e69-0b9a-4c79-a496-e3ce820118c6',
    name: 'Adidas',
  },
  {
    id: 'f614a1a4-be21-4a3f-88a7-6d8b641011ea',
    name: 'Under Armour',
  },
];

export const mockPaymentIntent = {
  id: 'pi_3RWg7nH65Yc4W3X51DgdDCCM',
  object: 'payment_intent',
  amount: 160,
  amount_capturable: 0,
  amount_details: {
    tip: {},
  },
  amount_received: 0,
  application: null,
  application_fee_amount: null,
  automatic_payment_methods: {
    allow_redirects: 'always',
    enabled: true,
  },
  canceled_at: null,
  cancellation_reason: null,
  capture_method: 'automatic_async',
  client_secret: 'pi_3R**********************_******_*********************DGhA',
  confirmation_method: 'automatic',
  created: 1749138879,
  currency: 'usd',
  customer: null,
  description: null,
  last_payment_error: null,
  latest_charge: null,
  livemode: false,
  metadata: {},
  next_action: null,
  on_behalf_of: null,
  payment_method: null,
  payment_method_configuration_details: {
    id: 'pmc_1RSpw1H65Yc4W3X5YffsDrNH',
    parent: null,
  },
  payment_method_options: {
    amazon_pay: {
      express_checkout_element_session_id: null,
    },
    card: {
      installments: null,
      mandate_options: null,
      network: null,
      request_three_d_secure: 'automatic',
    },
    cashapp: {},
    klarna: {
      preferred_locale: null,
    },
    link: {
      persistent_token: null,
    },
  },
  payment_method_types: ['card', 'klarna', 'link', 'cashapp', 'amazon_pay'],
  processing: null,
  receipt_email: null,
  review: null,
  setup_future_usage: null,
  shipping: null,
  source: null,
  statement_descriptor: null,
  statement_descriptor_suffix: null,
  status: 'requires_payment_method',
  transfer_data: null,
  transfer_group: null,
};
/*
CartDetails mock data
*/
export const cartDetailData: CartDetails[] = [
  {
    id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
    quantity: 3,
    price: 32.32,
    variant_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
    cart_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
];
/*
Orders mock data
*/
export const ordersData = [
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '0417dcba-46cc-4987-86f7-e67050effbc2',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '04416701-4774-4ea9-9b72-f75076dc750c',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '1107ae51-dd8e-43e2-8dbd-de36a94c216f',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '14fb24f4-46af-414c-9d4f-519d33484092',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '16623e19-e486-4cd7-b3fc-d807613f8fdd',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '201c933f-23a7-41dd-b781-68faf28359f9',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '23372f19-bd3d-4f7f-b45d-ca6cd8777bd2',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '27bafc18-f62f-4c59-9e01-082888759750',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '315ee53b-5fd3-4241-8645-c3bc472d5aaa',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
  {
    created_at: new Date('2025-06-01T17:48:30.266Z'),
    id: '351f8b9e-abe9-42be-8531-b2aade5b2d1e',
    user_id: '9a026d8c-9264-4a2f-b8c0-fd58200d55b8',
  },
];
const id = '9a026d8c-9264-4a2f-b8c0-fd58200d55b8';
export const dataOrder: Prisma.OrdersCreateInput = {
  user: {
    connect: { id },
  },
};
