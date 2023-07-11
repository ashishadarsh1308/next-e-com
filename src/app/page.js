import Image from 'next/image'
import axios from 'axios'
import ListProducts from '@/components/products/ListProducts';

const getProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/api/products');
  return data;
};

const Home = async () => {

  const productsData = await getProducts();
  return (
    <div>
      <ListProducts data={productsData} />
    </div>
  )
}

export default Home;
