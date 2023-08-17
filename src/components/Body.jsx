const Body = () => {
    return (
      <main className=" max-w-[17rem] bg-White flex flex-col items-center rounded-2xl">

        {/* Image */}
        <picture className=" mx-[0.80rem] mt-[0.80rem]">
          <img
            src="/images/image-qr-code.png"
            alt="qr-code-img"
            className="rounded-lg h-fit"
          />
        </picture>
  
        {/* Text */}
        <article className="text-center break-words m-4">
          <h1 className="text-Dark_blue font-bold text-xl">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-Grayish_blue font-normal my-4 text-sm">
            Scan the QR code to visit Frontend Mentor and take your coding skills
            to the next level
          </p>
        </article>
      </main>
    );
  };
  
  export default Body;
  