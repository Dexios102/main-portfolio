import Spline from "@splinetool/react-spline";

const Information = () => {
  return (
    <div className="flex md:flex-row md:flex-start items-center justify-between flex-col flex-end">
      <div className="text-3xl font-bold text-white">
        <h1 className="text-black dark:text-white">About Me</h1>
        <p className="dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nisi quos
          itaque aspernatur quisquam sed numquam dolorem neque provident saepe
          eveniet fugiat magni quod sint, quidem voluptatem omnis in nihil
          distinctio libero quam totam beatae officiis sunt! At, animi harum.
        </p>
      </div>
      <div className="">
        <Spline
          className="relative top-0 right-0 m-0"
          scene="https://prod.spline.design/WqYap6iM4cfrLSK3/scene.splinecode"
        />
      </div>
    </div>
  );
};

export default Information;
