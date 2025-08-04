import pagesData from "@/services/mockData/pages.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class PageService {
  constructor() {
    this.pages = [...pagesData];
  }

  async getAll() {
    await delay(200);
    return [...this.pages];
  }

  async getById(id) {
    await delay(200);
    const page = this.pages.find(p => p.Id === parseInt(id));
    if (!page) {
      throw new Error(`Page with Id ${id} not found`);
    }
    return { ...page };
  }

  async getByPath(path) {
    await delay(200);
    const page = this.pages.find(p => p.path === path);
    if (!page) {
      throw new Error(`Page with path ${path} not found`);
    }
    return { ...page };
  }

  async getPublicPages() {
    await delay(200);
    return this.pages.filter(p => p.isPublic).map(p => ({ ...p }));
  }

  async getPagesByRole(role, isAdmin = false) {
    await delay(200);
    if (isAdmin) {
      return [...this.pages];
    }
    
    return this.pages.filter(p => {
      if (p.isPublic) return true;
      if (p.requiredRoles.length === 0) return true;
      return p.requiredRoles.includes(role);
    }).map(p => ({ ...p }));
  }

  async checkAccess(pageId, userRole, isAdmin = false) {
    await delay(200);
    const page = this.pages.find(p => p.Id === parseInt(pageId));
    if (!page) {
      throw new Error(`Page with Id ${pageId} not found`);
    }
    
    if (isAdmin) return true;
    if (page.isPublic) return true;
    if (page.requiredRoles.length === 0) return true;
    
    return page.requiredRoles.includes(userRole);
  }
}

export default new PageService();