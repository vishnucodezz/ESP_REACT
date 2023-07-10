function App() {
  return (
    <div data-theme="luxury" className="flex mx-auto items-center justify-center w-full h-screen">
      <form
        action=""
        className="shadow-md  font-sans font-semibold border border-gray-500  flex flex-col gap-5 p-5 items-start justify-center rounded-lg"
      >
        <h1 className="text-4xl font-bold  text-orange-500 leading-8 tracking-wider">
          Employee Service Portal
        </h1>
        <label
          htmlFor=""
          className="px-2 flex gap-2 items-start flex-col w-full"
        >
          <span>Username</span>
          <input
            type="text"
            className="border rounded-md outline outline-2 outline-gray-600 w-full p-2"
          />
        </label>
        <label
          htmlFor=""
          className="px-2 flex gap-2 items-start flex-col w-full"
        >
          <span>Password</span>
          <input
            type="text"
            className="border rounded-md outline outline-2 outline-gray-600 w-full p-2"/>
        </label>

        <div className="w-full flex items-end justify-end">
          <button className="btn btn-success">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;