import React from "react";

function Post() {
  const posts = [
    {
      title: "Learn About Computer",
      url: "https://static.vecteezy.com/system/resources/previews/014/375/045/original/desktop-computer-illustration-in-3d-isometric-style-png.png",
      date: "October 22, 2023",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae?",
    },
    {
      title: "Learn About CPU",
      date: "October 22, 2023",
      url: "https://cdn-icons-png.flaticon.com/512/911/911412.png",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae?",
    },
    {
      title: "Learn About GPU",
      url: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79237/gpu-ati-clipart-md.png",
      date: "October 22, 2023",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae?",
    },
    {
      title: "Learn About Ram",
      url: "https://img.freepik.com/free-icon/chip_318-364101.jpg",
      date: "October 22, 2023",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, beatae?",
    },
  ];
  return (
    <div className=" flex flex-col items-center max-w-6xl w-full h-fit lg:h-screen px-10 m-auto gap-7 ">
      <h2 className="text-3xl md:text-4xl text-center">Latest Posts</h2>
      <p className="text-gray-400 text-base leading-6 text-center max-w-[550px]">
        Learn about pc building and all its components and other techy stuff
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {posts.map((post) => (
          <div
            key={post.title}
            className="p-3 shadow-2xl rounded-lg flex flex-col justify-between items-center w-full relative"
          >
            <img src={post.url} alt={post.title} className="object-cover" />
            <span className="bg-black px-1 p-[0.1rem] text-white text-xs rounded-sm absolute right-0 mr-4 z-10">
              {post.date}
            </span>
            <div>
              <h4 className="text-lg">{post.title}</h4>
              <p className="text-gray-500 text-base">{post.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
