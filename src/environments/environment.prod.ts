const MONGODB_URI =
  'mongodb+srv://steve:Kmia@0703@cluster0.d3ima.mongodb.net/course?retryWrites=true&w=majority';
export const environment = {
  production: true,
  bddUrl: MONGODB_URI || 'https://localhost:3000/listes/produits',
};
