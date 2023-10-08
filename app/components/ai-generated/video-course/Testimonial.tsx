// A minimal testimonial section providing social proof.
const Testimonial = ({ text, author }) => {
  return (
    <blockquote className="py-6 text-gray-600 italic border-t-2 border-b-2 border-gray-200">
      <p>"{text}"</p>
      <cite className="block mt-2 text-sm text-right">— {author}</cite>
    </blockquote>
  );
};

export default Testimonial;