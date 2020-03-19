export const mockDefault = {
  price: {
    currency: '$',
    amount: 1234,
  },
  button: {
    url: '',
    text: 'Comprar',
    id: 12345
  },
  name: {
    text: 'Un titulo medio largo asi lorem'
  },
  image: {
    url: ''
  }
}

export const mockTag = {
  ...mockDefault,
  tag: {
    text: 'SALE'
  },
}

export const mockLastAmount = {
  ...mockDefault,
  price: {
    currency: '$',
    amount: 1234,
    lastAmount: 2000
  },
}