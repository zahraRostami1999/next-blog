export async function getPosts() {
  const res = await fetch("http://localhost:8000/Posts");
  let data = await res.json();
  
  return data;
}

export async function getPost(id) {
    const res = await fetch(`http://localhost:8000/Posts/${id}`);
    let data = await res.json();
    
    return data;
}