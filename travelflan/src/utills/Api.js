const URL = "https://jsonplaceholder.typicode.com/albums";

const api = {
  async get() {
    const data = await fetch(URL);
    const albums = await data.json();
    return albums;
  },

  async post(newId, newTitle) {
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
  },

  async update(renewalPost) {
    const data = await fetch(`${URL}/${renewalPost}.id`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        title: renewalPost.title
      })
    });
    const newPost = await data.json();
    return newPost;
  },

  async delete(targetId, state) {
    await fetch(`${URL}/${targetId}`, {
      method: "DELETE"
    });
    const removePost = state.filter(post => targetId !== post.id);
    return removePost;
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

// const UpdatePost = async e => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${updatePost.id}`, {
//     method: "PATCH",
//     headers: { "content-Type": "application/json" },
//     body: JSON.stringify({
//       title: updatePost.title
//     })
//   });
//   const newPost = await data.json();
//   setState(state.map(post => (newPost.id === post.id ? { ...post, title: newPost.title } : post)));
//   setUpdatePost({ id: 0, title: "" });
// };

// const DeletePost = async e => {
//   await fetch(`https://jsonplaceholder.typicode.com/albums/${e.target.parentNode.id}`, {
//     method: "DELETE"
//   });
//   setState(state.filter(post => +e.target.parentNode.id !== post.id));
// };
