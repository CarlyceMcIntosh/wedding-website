export default function Registry(){
  return(
    <section id="registry" className="py-20 bg-ivory-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-cinzel text-4xl text-sage-900 mb-6">Registry</h2>

        {/* Message */}
        <p className="text-sage-800 mb-8">
          Your presence is the greatest gift of all. 
          If you would like to honor us with a gift, we kindly ask for monetary contributions via Zelle. 
          We are truly grateful for your love and support.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.zellepay.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-sage-600 px-6 py-3 text-sm font-semibold text-ivory-50 shadow-sm hover:bg-sage-700"
        >
          Send via Zelle
        </a>

        {/* Subtext (optional) */}
        <p className="mt-4 text-sm text-sage-700">
          Zelle Email: <span className="font-medium">ourwedding@email.com</span>
        </p>
      </div>
  </section>

    
  )

}