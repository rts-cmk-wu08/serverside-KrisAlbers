import Link from "next/link";

//products - Landing
//started
//posts
//offers

//Statisk HTML SSG (static site generation):

const getData = async () => {
    const result = await fetch("https://swanky-api.onrender.com/posts");

    if (!result.ok) {
        throw new Error("Failed to fetch data");
    }

    return result.json();
};

export default async function page() {
    const posts = await getData();

    //console.log(posts);

    return (
        <main>
            <h2>Swanky's Blog</h2>

            <ul className="ul">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                            
                            <br />
                            <br />
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
