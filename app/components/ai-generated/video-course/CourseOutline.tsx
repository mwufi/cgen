// Simple list of lessons/modules with minimalist icons for easy navigation.
const CourseOutline = () => {
  return (
    <div className="py-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Course Outline</h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-600">
          <span className="material-icons-outlined text-gray-500 mr-2">
            check_circle_outline
          </span>
          Introduction to Goal Setting
        </li>
        {/* Add Additional Lessons Here */}
      </ul>
    </div>
  );
};

export default CourseOutline;
