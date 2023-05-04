'use client';

//import React from "react";
import { useState } from "react";



export default async function page() {

    //  const [user, setUser] = useState(0);

    const [count, setCount] = useState(0);
    return (
        <main>
            <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
            <h2>Any Questions?</h2>
            <form action="">
                <input type="text" name="name" placeholder="navn..."/>
                <input type="email" name="email" placeholder="email..."/>
                <input type="text" name="text" placeholder="text..."/>
            </form>
        </main>
    );
}
