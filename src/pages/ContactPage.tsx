const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-90px)]">
      <h1 className="text-white text-4xl md:text-7xl font-bold mb-10">
        <span className="text-[#bf0603]">Connect</span> with me.
      </h1>
      <div className="bg-black/10 backdrop-blur-sm rounded-lg p-4 md:p-10 w-full max-w-screen-md">
        <form action="" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-10">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="example@mail.com" />
          <textarea placeholder="Message"></textarea>
          <button className="w-full text-white bg-[#bf0603]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
