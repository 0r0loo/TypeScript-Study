let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456'
}

const { country, city, ...rest} = address; 
console.log(rest);