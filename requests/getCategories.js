
export default async function getCategories(){
    const categories = fetch('http://localhost:3000/categories')


    return categories;
}