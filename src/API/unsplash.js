import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cPkKOWY4TbLhzhKIrpLcARnN-s32LwgP8oYlkc3Gnu0'
  }
});
