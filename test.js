const res = await fetch(`${API_URL}?language=ko-KR&page=1`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    accept: 'application/json'
  },
})