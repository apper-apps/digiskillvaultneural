import { toast } from 'react-toastify';

class PageService {
  constructor() {
    this.tableName = 'page';
    this.apperClient = null;
    this.initializeClient();
  }

  initializeClient() {
    const { ApperClient } = window.ApperSDK;
    this.apperClient = new ApperClient({
      apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
      apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
    });
  }

  async getAll() {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "path" } },
          { field: { Name: "requiredRoles" } },
          { field: { Name: "isPublic" } }
        ]
      };

      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching pages:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }

  async getById(id) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "path" } },
          { field: { Name: "requiredRoles" } },
          { field: { Name: "isPublic" } }
        ]
      };

      const response = await this.apperClient.getRecordById(this.tableName, id, params);
      
      if (!response || !response.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching page with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  }

  async getByPath(path) {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "path" } },
          { field: { Name: "requiredRoles" } },
          { field: { Name: "isPublic" } }
        ],
        where: [
          {
            FieldName: "path",
            Operator: "EqualTo",
            Values: [path]
          }
        ]
      };

      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      if (!response.success || !response.data || response.data.length === 0) {
        return null;
      }
      
      return response.data[0];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching page with path ${path}:`, error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return null;
    }
  }

  async getPublicPages() {
    try {
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "path" } },
          { field: { Name: "requiredRoles" } },
          { field: { Name: "isPublic" } }
        ],
        where: [
          {
            FieldName: "isPublic",
            Operator: "EqualTo",
            Values: [true]
          }
        ]
      };

      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching public pages:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }

  async getPagesByRole(role, isAdmin = false) {
    try {
      if (isAdmin) {
        return await this.getAll();
      }

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "Tags" } },
          { field: { Name: "path" } },
          { field: { Name: "requiredRoles" } },
          { field: { Name: "isPublic" } }
        ],
        whereGroups: [
          {
            operator: "OR",
            subGroups: [
              {
                conditions: [
                  {
                    fieldName: "isPublic",
                    operator: "EqualTo",
                    values: [true]
                  }
                ],
                operator: "OR"
              },
              {
                conditions: [
                  {
                    fieldName: "requiredRoles",
                    operator: "Contains",
                    values: [role]
                  }
                ],
                operator: "OR"
              }
            ]
          }
        ]
      };

      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        return [];
      }

      return response.data || [];
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching pages by role:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }

  async checkAccess(pageId, userRole, isAdmin = false) {
    try {
      const page = await this.getById(pageId);
      
      if (!page) {
        return false;
      }
      
      if (isAdmin) return true;
      if (page.isPublic) return true;
      if (!page.requiredRoles || page.requiredRoles.length === 0) return true;
      
      // Handle MultiPicklist format - requiredRoles comes as comma-separated string
      const requiredRolesArray = typeof page.requiredRoles === 'string' 
        ? page.requiredRoles.split(',') 
        : page.requiredRoles;
      
      return requiredRolesArray.includes(userRole);
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error checking page access:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return false;
    }
  }
}

export default new PageService();