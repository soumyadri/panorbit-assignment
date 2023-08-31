import axios from 'axios';

export const getUserData = async () => {
      const result = await axios.get('https://panorbit.in/api/users.json');
      return result.data.users;
}