import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { PlusCircle, List, LogOut } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';

const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // Navigation is handled in the logout function
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="h-screen bg-deep-charcoal text-soft-cream w-64 flex flex-col shadow-lg border-r border-royal-gold/30">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-soft-cream">
          Apex<span className="text-royal-gold">.</span> Admin
        </h2>
        <p className="text-soft-cream/60 text-sm mt-1">Blog Management</p>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/admin/add"
              className={({ isActive }) => 
                `flex items-center py-3 px-4 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-royal-gold/10 text-royal-gold border border-royal-gold/30' 
                    : 'text-soft-cream/80 hover:bg-royal-gold/5 hover:text-royal-gold'
                }`
              }
            >
              <PlusCircle className="h-5 w-5 mr-3" />
              <span>Add Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blogs"
              className={({ isActive }) => 
                `flex items-center py-3 px-4 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-royal-gold/10 text-royal-gold border border-royal-gold/30' 
                    : 'text-soft-cream/80 hover:bg-royal-gold/5 hover:text-royal-gold'
                }`
              }
            >
              <List className="h-5 w-5 mr-3" />
              <span>View Blogs</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-royal-gold/20">
        <button
          onClick={handleLogout}
          className="flex items-center py-3 px-4 w-full rounded-lg transition-colors text-soft-cream/80 hover:bg-royal-gold/5 hover:text-royal-gold"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Log Out</span>
        </button>
        
        <NavLink
          to="/"
          className="flex items-center py-3 px-4 w-full rounded-lg transition-colors text-soft-cream/80 hover:bg-royal-gold/5 hover:text-royal-gold mt-2"
        >
          <span>Back to Website</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar; 