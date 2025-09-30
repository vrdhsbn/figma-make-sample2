import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/company', label: '企業情報' },
    { path: '/business', label: '事業内容' },
    { path: '/products', label: '商品紹介' },
    { path: '/careers', label: '採用情報' }
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">桜</span>
              </div>
              <div>
                <h1 className="text-2xl text-amber-800 tracking-wide">桜和堂</h1>
                <p className="text-xs text-amber-600">創業明治十年</p>
              </div>
            </motion.div>
          </Link>

          {/* ナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-amber-200 text-amber-800'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <motion.button 
            className="md:hidden p-2 text-amber-700"
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12h18m-18 6h18m-18-12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;