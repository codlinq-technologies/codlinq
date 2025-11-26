import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, role, photo, message }) => {
  return (
    <div className="w-full max-w-sm border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 bg-white dark:bg-darkbg shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-brand"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {name}
          </h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>

      <div className="flex text-yellow-400 text-lg">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {message}
      </p>
    </div>
  );
};

export default TestimonialCard;

