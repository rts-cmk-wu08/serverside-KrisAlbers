import Link from "next/link";

// SSR (server side render)

const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/products", {
        next: { revalidate: 30 }
    });

    if (!result.ok) {
        throw new Error("Failed to fetch data");
    }

    return result.json();
};

export default async function page() {
    const products = await getData();

    //console.log(products);

    return (
        <main>
            <h2>Swanky Landing</h2>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                            <p>Price: </p>{product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
