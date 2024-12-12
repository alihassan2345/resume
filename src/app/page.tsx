// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I am Ali Hassan</h1>
            <p className="text-lg md:text-xl mb-6">Front-end Developer </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-black px-4 py-2 rounded shadow">About Me</a>
              <a href="#contact" className="bg-gray-700 px-4 py-2 rounded shadow">Contact Me</a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src="/images/ali hassan-doit.pk.jpg" alt="Tomasz Gajda" className="w-48 h-48 rounded-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="text-center py-20 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-black">ABOUT ME</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Hi, I’m Ali Hassan, a passionate Front-End Developer dedicated to creating engaging and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, TypeScript, React, and Next.js, I specialize in building modern, responsive, and accessible websites that combine creativity with functionality.

I take pride in writing clean, efficient, and maintainable code, ensuring every project I work on not only meets but exceeds expectations. Whether it's crafting intuitive user interfaces or optimizing web performance, I strive to deliver excellence in every detail.

I’m constantly learning and evolving, keeping up with the latest technologies and trends in web development. Let’s create something amazing together!
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black">SKILLS</h2>
        <div className="container mx-auto px-6 md:px-12">
          {/* Using Now Section */}
          <h3 className="text-xl font-semibold mt-10 text-black">USING NOW:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {['HTML5', 'CSS3', 'Sass', 'JavaScript', 'React', 'Bootstrap', 'Git', 'Figma'].map((skill) => (
              <div key={skill} className="bg-gray-200 w-24 h-24 flex items-center justify-center rounded-lg shadow-md text-black">
                <span className="text-sm font-semibold">{skill}</span>
              </div>
            ))}
          </div>

          {/* Learning Section */}
          <h3 className="text-xl font-semibold mt-16 text-black">LEARNING:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {['Node.js', 'TypeScript'].map((skill) => (
              <div key={skill} className="bg-gray-200 w-24 h-24 flex items-center justify-center rounded-lg shadow-md text-black">
                <span className="text-sm font-semibold">{skill}</span>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black">PORTFOLIO</h2>
        <div className="container mx-auto px-6 md:px-12 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md text-black">
              <h3 className="text-lg font-semibold">{project}</h3>
              <p className="text-sm text-gray-600 mt-2">Description of {project} goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black">CONTACT</h2>
        <form className="mt-10 max-w-xl mx-auto space-y-6 ">
          <input
            type="text "
            placeholder="Enter Your Name "
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 text-black border-b"
           />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
            
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Ali Hassan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
