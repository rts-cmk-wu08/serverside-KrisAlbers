const getData = async (blogId) => {
    const result = await fetch(
        `https://swanky-api.onrender.com/posts/${blogId.blogId}`
    );

    if (!result.ok) {
        throw new Error("failed to fetch data");
    }

    return result.json();
};

export default async function page({ params: blogId }) {
    const post = await getData(blogId);
console.log(blogId);
    return (
        <main>
            <h1>{post.title}</h1>
           <p>{post.subtitle}</p>
        </main>
    );
}
