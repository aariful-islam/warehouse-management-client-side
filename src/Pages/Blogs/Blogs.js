import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="mt-5">Difference between javascript and nodejs</h1>
      <p className="mb-2">
        Answer: JavaScript is a simple programming language that runs in any
        browser JavaScript Engine. Whereas Node JS is an interpreter or running
        environment for a JavaScript programming language that holds many
        excesses, it requires libraries that can easily be accessed from
        JavaScript programming for better use. Javascript used for any client
        side activity for a web application . On the otherhand nodejs used for
        accessing or performing any non-blocking operation of any operating
        system. Javascript running engines are : Firebox , javascript
        core(safari),google chrome etc. Node js running engine only v8 google
        chrome.
      </p>
      <h1>When should you use nodejs and when should you use mongodb?</h1>
      <p className="mb-2">
        Answer : Suppose we are building a website and we need a database to
        store the data or information so here we can use MongoDB but to be
        connected with MongoDB we need a connector, so here we can use NodeJS
        which will help our website to run outside of server. so we can say that
        we use mongodb for store data. NodeJS is a JavaScript runtime
        environment. It's actually helps JavaScript to run outside of server.
        It's used in server side development.
      </p>
      <h1>Differences between sql and nosql databases</h1>
      <p className="mb-5">
        Answer: SQL is a relational database managemnet system. On the otherhand
        nosql is a distributed databse managemnet system. SQL is vertically
        scalable and nosql is horiozantly scalable. SQL work with fixed or
        predefined scheema and nosql work with dynamic scheema. SQL can be used
        for complex queries . Nosql is not good for complex queries.
      </p>
    </div>
  );
};

export default Blogs;
