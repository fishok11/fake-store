export const DEFAULT_URL = 'http://localhost:3002/'

export const cap = (str: string) => {
  if (str === '') return str;

  return str
    .split(' ')
    .map(word => 
      word.charAt(0).toUpperCase() 
      + word.slice(1).toLowerCase()
    )
    .join(' ')
}

export const cookiesLifetime = new Date('3000-12-17T03:24:00');
