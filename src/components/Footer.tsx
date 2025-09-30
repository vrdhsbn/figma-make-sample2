import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                <span className="text-white">桜</span>
              </div>
              <h3 className="text-xl">桜和堂</h3>
            </div>
            <p className="text-amber-200 mb-4">
              明治十年創業の京都老舗和菓子店。<br />
              四季の美しさを表現した伝統の和菓子を<br />
              心を込めてお作りしております。
            </p>
            <div className="text-sm text-amber-300">
              <p>〒602-8031 京都市上京区室町通丸太町上ル</p>
              <p>TEL: 075-123-4567</p>
              <p>営業時間: 9:00-18:00（水曜定休）</p>
            </div>
          </motion.div>

          {/* リンク */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-amber-200">
              <li><Link to="/company" className="hover:text-white transition-colors">企業情報</Link></li>
              <li><Link to="/business" className="hover:text-white transition-colors">事業内容</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">商品紹介</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">採用情報</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </motion.div>

          {/* SNS・その他 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-lg mb-4">フォローする</h4>
            <div className="flex space-x-4 mb-6">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">fb</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">ig</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">tw</span>
              </motion.a>
            </div>
            <div className="text-sm text-amber-300">
              <p>オンラインショップ</p>
              <p>季節限定商品のお知らせ</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p>&copy; 2024 桜和堂. All rights reserved. | 創業明治十年 京都老舗和菓子店</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;