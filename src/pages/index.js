import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";

export default function Home({products}) {
  return (
    <>
          <Header/>
           <main className="max-w-screen-xl mx-auto">
            <Banner/>
            <ProductFeed products={products}/>

            </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch("https://fakestoreapi.com/products")
  const products = await data.json()

  return {
    props:{
      products:products,
    }
  }
}