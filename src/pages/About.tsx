
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600 mb-6">
            Founded in 2003, London Construction Co. has established itself as a
            leading force in London's construction industry. Our journey began with
            a simple yet powerful vision: to deliver construction excellence while
            maintaining the highest standards of quality and client satisfaction.
          </p>
          
          <p className="text-gray-600 mb-6">
            With over two decades of experience, we've successfully completed
            hundreds of projects across London, ranging from historical building
            renovations to modern office complexes. Our team of skilled
            professionals brings expertise, dedication, and attention to detail to
            every project we undertake.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Values</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work, using only the
                finest materials and latest construction techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of construction technology and sustainable
                building practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain transparent communication and honest relationships with
                all our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver projects on time and within budget, maintaining the
                highest standards throughout.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Expertise</h2>
          
          <p className="text-gray-600 mb-6">
            We specialize in a wide range of construction services, including:
          </p>
          
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Commercial Construction</li>
            <li>Residential Development</li>
            <li>Historical Building Renovation</li>
            <li>Sustainable Building Solutions</li>
            <li>Interior Fit-outs</li>
            <li>Project Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
