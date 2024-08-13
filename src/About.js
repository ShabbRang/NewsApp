import React from "react";
import Navbar from "./components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar title="NewsMonkey" />
      <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About NewsHub</h1>
          <p className="text-lg text-gray-700 mb-8">
            Welcome to NewsHub, your go-to destination for staying informed and
            up-to-date with the latest news and happenings from around the
            world. At NewsHub, we are passionate about delivering reliable and
            diverse news content to our users, empowering them to make informed
            decisions and stay connected with the world around them.
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At NewsHub, our mission is to democratize access to news and
            information, providing a platform where users can discover, explore,
            and engage with news content across a wide range of topics and
            interests. We believe in the power of journalism to inform, inspire,
            and drive positive change, and we are committed to upholding the
            highest standards of accuracy, integrity, and impartiality in our
            news delivery.
          </p>

          <h2 className="text-2xl font-bold mb-2">What Sets Us Apart</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-lg text-gray-700 mb-2">
              <strong>Personalized Experience:</strong> We understand that every
              user is unique, with different interests and preferences. That's
              why NewsHub offers personalized news feeds tailored to your
              interests, ensuring that you receive the most relevant and
              engaging content every time you visit.
            </li>
            <li className="text-lg text-gray-700 mb-2">
              <strong>Comprehensive Coverage:</strong> From breaking news and
              top headlines to in-depth analysis and feature stories, NewsHub
              provides comprehensive coverage across diverse categories,
              including politics, business, technology, sports, entertainment,
              and more.
            </li>
            <li className="text-lg text-gray-700 mb-2">
              <strong>User-Friendly Interface:</strong> Our user-friendly
              interface is designed to make your news browsing experience
              seamless and enjoyable. With intuitive navigation, easy-to-use
              search functionality, and sleek design, NewsHub puts the power of
              information at your fingertips.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
          <p className="text-lg text-gray-700 mb-6">
            At NewsHub, we believe in the importance of community and
            collaboration. We welcome feedback, suggestions, and contributions
            from our users to help us improve and evolve our platform. Whether
            you have a story idea, a feature request, or just want to share your
            thoughts, we'd love to hear from you. Get in touch with us via
            email, social media, or through our website.
          </p>

          <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-6">
            Connect with us on social media to stay updated on the latest news,
            features, and announcements from NewsHub. Follow us on Twitter,
            Facebook, and Instagram to join the conversation, share your
            favorite articles, and connect with fellow news enthusiasts.
          </p>

          <p className="text-lg text-gray-700">
            Thank you for choosing NewsHub as your trusted source for news and
            information. Together, let's stay informed, inspired, and connected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
