import Spline from "@splinetool/react-spline";

const Information = () => {
  return (
    <div
      className="flex md:flex-row items-center justify-between flex-col
    overflow-hidden"
    >
      <div className="text-3xl font-extrabold text-white">
        <h1 className="text-black dark:text-rose-800 text-center md:text-left mt-4">
          About Me
        </h1>
        <p className="dark:text-gray-300 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi quos
          itaque aspernatur quisquam sed numquam dolorem neque provident saepe
          eveniet fugiat magni quod sint, quidem voluptatem omnis in nihil
          distinctio libero quam totam beatae officiis sunt! At, animi harum.
        </p>
      </div>
      <div className="">
        <Spline
          className=""
          scene="https://prod.spline.design/WqYap6iM4cfrLSK3/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default Information;
