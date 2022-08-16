const baseUrl = 'http://exampleurl';

const getData = (userId: number): string => `${baseUrl}/data/${userId}`;
export default getData;
