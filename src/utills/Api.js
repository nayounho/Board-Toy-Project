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
    const data = await fetch(`${URL}/${renewalPost.id}`, {
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
