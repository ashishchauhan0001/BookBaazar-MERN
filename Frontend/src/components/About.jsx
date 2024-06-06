import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center mb-3">About Us</h1>
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Welcome to <span className="font-semibold text-pink-600">BookBazaar</span>, your ultimate destination for book enthusiasts! At <span className="font-semibold text-pink-600">BookBazaar</span>, we believe in the transformative power of reading and strive to make books accessible to everyone. Our platform offers a diverse collection of books, ranging from timeless classics to the latest bestsellers. Whether you're a casual reader or a dedicated bibliophile, you'll find something to pique your interest in our extensive library. We are committed to providing both free and premium content, ensuring that everyone has the opportunity to indulge in their love for reading. Our free books section offers a variety of genres, from fiction and non-fiction to educational materials and more. For those looking for exclusive content, our premium section provides access to a curated selection of high-quality books at affordable prices.

            At <span className="font-semibold  text-pink-600">BookBazaar</span>, we prioritize user experience and convenience.  Join our community of readers and embark on a literary journey with <span className="font-semibold  text-pink-600">BookBazaar</span>, where every book opens a new world of possibilities. Thank you for choosing <span className="font-semibold  text-pink-600">BookBazaar</span> as your reading companion. Happy reading!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
