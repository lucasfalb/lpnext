const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity opacity-100" id="loader">
      {/* Aqui você pode adicionar o design do seu loader */}
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
