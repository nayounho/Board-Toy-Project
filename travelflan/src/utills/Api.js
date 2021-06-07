const URL = "https://jsonplaceholder.typicode.com/albums";

const api = {
  async get() {
    const data = await fetch(URL);
    const albums = await data.json();
    return albums;
  },

  async post(newId, newTitle) {
    console.log("new", newTitle);
    const data = await fetch(URL, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        userId: 11,
        id: newId,
        title: newTitle
      })
    });
    const addPost = await data.json();
    return addPost;
  }
};

export default api;

// const render = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/albums");
//   const albums = await data.json();
//   setState(albums);
// };

// const CreatePost = async e => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/albums", {
//     method: "POST",
//     headers: { "content-Type": "application/json" },
//     body: JSON.stringify({
//       userId: 11,
//       id: state.length ? Math.max(...state.map(post => post.id)) + 1 : 1,
//       title: post
//     })
//   });
//   const addPost = await data.json();
//   setState([...state, addPost]);
//   setPost("");
// };
