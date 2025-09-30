import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* ヒーローセクション */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwd2FnYXNoaSUyMHN3ZWV0c3xlbnwxfHx8fDE3NTkxMzUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="伝統的な和菓子" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          {...fadeInUp}
        >
          <motion.h1 
            className="text-6xl md:text-8xl mb-6 tracking-widest"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            桜和堂
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-4 tracking-wide"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            創業明治十年
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            京都の四季と共に歩む<br />
            百五十年の伝統を受け継ぐ老舗和菓子店
          </motion.p>
          <motion.button 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            商品を見る
          </motion.button>
        </motion.div>

        {/* スクロール指示 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-center"
          >
            <p className="text-sm mb-2">スクロールして詳細を見る</p>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mx-auto mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 特色セクション */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">桜和堂の特色</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              明治十年の創業以来、京都の美しい四季を和菓子に込めて、
              伝統の技法と心を受け継いでまいりました。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">伝</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">伝統の技法</h3>
              <p className="text-gray-600 leading-relaxed">
                百五十年間受け継がれてきた職人の技術と、厳選された素材を用いて、
                一つ一つ丁寧に手作りしております。
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">季</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">四季の表現</h3>
              <p className="text-gray-600 leading-relaxed">
                京都の美しい四季を和菓子で表現し、
                季節ごとの限定商品で日本の風情をお届けいたします。
              </p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">心</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">おもてなしの心</h3>
              <p className="text-gray-600 leading-relaxed">
                お客様一人一人への心からのおもてなしと、
                真心を込めた和菓子作りを大切にしております。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 商品紹介セクション */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">代表的な商品</h2>
            <p className="text-lg text-gray-600">季節の移ろいを表現した自慢の和菓子をご紹介いたします</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -10, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="季節の上生菓子" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-amber-800 mb-3">季節の上生菓子</h3>
                <p className="text-gray-600 mb-4">
                  四季の美しさを繊細に表現した上生菓子。職人が一つ一つ丁寧に仕上げます。
                </p>
                <div className="text-amber-600">¥380〜</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -10, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1709515522019-4794fd3568eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRyYWRpdGlvbmFsJTIwY29uZmVjdGlvbmVyeXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="京都名物どら焼き" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-amber-800 mb-3">京都名物どら焼き</h3>
                <p className="text-gray-600 mb-4">
                  ふっくらとした皮に自家製餡をたっぷりと挟んだ、当店自慢のどら焼きです。
                </p>
                <div className="text-amber-600">¥280</div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -10, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                <span className="text-amber-800 text-4xl">雅</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-amber-800 mb-3">雅の詰め合わせ</h3>
                <p className="text-gray-600 mb-4">
                  当店の代表的な和菓子を詰め合わせた、贈り物に最適な商品です。
                </p>
                <div className="text-amber-600">¥1,800〜</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 店舗情報セクション */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl text-amber-800 mb-6">京都室町の老舗店舗</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                京都市上京区室町通に構える当店は、明治十年の創業以来、
                地域の皆様に愛され続けてまいりました。
                伝統的な町家の風情を残した店内で、
                職人が心を込めて作る和菓子をお楽しみいただけます。
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <span className="w-20 text-amber-700">住所：</span>
                  <span>〒602-8031 京都市上京区室町通丸太町上ル</span>
                </div>
                <div className="flex items-center">
                  <span className="w-20 text-amber-700">電話：</span>
                  <span>075-123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="w-20 text-amber-700">営業：</span>
                  <span>9:00-18:00（水曜定休）</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1673499415085-6aa9f9927d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc1OTEzNTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="桜和堂店舗内観" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;