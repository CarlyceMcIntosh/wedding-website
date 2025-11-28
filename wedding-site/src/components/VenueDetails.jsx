export default function VenueDetails() {
  return (
    <section
      id="venue"
      className="section page-container pt-24 pb-12 text-center flex flex-col items-center" 
    >

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-cinzel text-sage-600 tracking-wide mb-6">
        Venue Details
      </h2>

      {/* Venue Name + Address */}
      <p className="font-cormorant text-xl md:text-xl text-sage-600 max-w-2xl leading-relaxed mb-12">
        <span className="font-extrabold"> Weddings on Memory Lane </span> 
        <br />
        78 Memory Ln, Hershey, PA
      </p>
      {}


      {/* Map card */}
      <div className="w-full max-w-2xl aspect-video rounded-2xl shadow-lg overflow-hidden mb-10 border border-sage-200 bg-white/40 backdrop-blur">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5492918835344!2d-76.5762499!3d40.2304847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a3becfa23f6d%3A0xc5728b9858972c76!2sWeddings%20on%20Memory%20Lane!5e1!3m2!1sen!2sus!4v1763179833455!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      {/* Short sub-description */}
      <p className="font-cormorant text-lg md:text-xl text-sage-700 max-w-xl leading-relaxed">
        Join us in celebrating our wedding in a beautiful countryside setting, 
        surrounded by love, friends, and family.
      </p>
      <div className="w-24 h-[2px] bg-sage-300 mt-10 mb-2 rounded-full"></div>

      
    </section>
    
  );
}
