import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/ecommerce';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmJjZDA4ZmIzNTNlNzkyNzkzM2VmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc1NDY0NSwiZXhwIjoxNjQ1NjE4NjQ1fQ.bNsZITG4KQUAXMv1hZzzf-Thk70toI73jvz_u_CabRk';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
