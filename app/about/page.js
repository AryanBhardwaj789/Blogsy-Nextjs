// about/page.js
import Head from 'next/head';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg mb-8 text-center">
          Welcome to our company! We are dedicated to providing the best service possible.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that bring value to our customers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            We have a diverse team of professionals committed to excellence.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Page;
