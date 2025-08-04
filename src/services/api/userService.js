import usersData from "@/services/mockData/users.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class UserService {
  constructor() {
    this.users = [...usersData];
  }

  async getAll() {
    await delay(300);
    return [...this.users];
  }

  async getById(id) {
    await delay(200);
    const user = this.users.find(u => u.Id === parseInt(id));
    if (!user) {
      throw new Error(`User with Id ${id} not found`);
    }
    return { ...user };
  }

  async getCurrentUser() {
    await delay(200);
    // Return the first user as the default current user (free tier)
    return { ...this.users[0] };
  }

  async create(userData) {
    await delay(400);
    const maxId = Math.max(...this.users.map(u => u.Id), 0);
    const newUser = {
      Id: maxId + 1,
      ...userData,
      created_at: new Date().toISOString()
    };
    this.users.push(newUser);
    return { ...newUser };
  }

  async update(id, userData) {
    await delay(300);
    const index = this.users.findIndex(u => u.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`User with Id ${id} not found`);
    }
    this.users[index] = { ...this.users[index], ...userData };
    return { ...this.users[index] };
  }

  async delete(id) {
    await delay(300);
    const index = this.users.findIndex(u => u.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`User with Id ${id} not found`);
    }
    const deletedUser = { ...this.users[index] };
    this.users.splice(index, 1);
    return deletedUser;
  }

  async updateRole(id, role, isAdmin = false) {
    await delay(300);
    const index = this.users.findIndex(u => u.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`User with Id ${id} not found`);
    }
    this.users[index] = { 
      ...this.users[index], 
      role: role,
      is_admin: isAdmin
    };
    return { ...this.users[index] };
  }
}

export default new UserService();