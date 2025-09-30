import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Business = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="py-20">
      {/* ヘッダーセクション */}
      <motion.section 
        className="bg-gradient-to-r from-amber-100 to-orange-100 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl text-amber-800 mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            事業内容
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            百五十年の伝統を活かした多様な事業展開で、
            和菓子の魅力を多くの方々にお届けしております。
          </motion.p>
        </div>
      </motion.section>

      {/* 主要事業一覧 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">主要事業</h2>
            <p className="text-lg text-gray-600">伝統と革新を融合させた多角的な事業展開</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">店</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">店舗販売事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                京都室町の本店を中心とした直営店舗での和菓子販売。
                職人が目の前で作る季節の生菓子をお楽しみいただけます。
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">茶</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">茶席菓子事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                茶道の各流派や茶会に合わせた特別な菓子の製造。
                季節感と美しさを重視した上生菓子を提供いたします。
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">通</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">通信販売事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                オンラインショップを通じた全国配送。
                遠方のお客様にも当店の味をお届けしております。
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">贈</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">贈答品事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                お中元・お歳暮・慶弔用など、様々な贈答シーンに対応した
                特別包装の商品を企画・製造しております。
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">体</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">体験教室事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                和菓子作り体験教室の開催。日本の伝統文化を
                多くの方に体験していただける場を提供しております。
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">卸</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4 text-center">卸売事業</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                料亭・ホテル・百貨店への卸売事業。
                業務用の和菓子製造も承っております。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 製造工程 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">製造工程</h2>
            <p className="text-lg text-gray-600">伝統の技法で作られる和菓子の製造工程をご紹介</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl text-amber-800 mb-6">1. 原材料の厳選</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  北海道産の小豆、国産の上白糖、京都の名水など、
                  厳選された原材料のみを使用しております。
                  季節ごとに最適な産地から調達し、品質の向上に努めています。
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 北海道十勝産小豆（エリモショウズ）</li>
                  <li>• 国産上白糖・和三盆糖</li>
                  <li>• 京都伏見の名水</li>
                  <li>• 奈良県産本葛粉</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="w-full h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-amber-800 text-4xl">原</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp} className="md:order-2">
                <h3 className="text-2xl text-amber-800 mb-6">2. 餡作り</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  小豆を一晩水に浸した後、職人が火加減を見極めながら
                  丁寧に炊き上げます。渋切りを何度も繰り返し、
                  滑らかで上品な甘さの餡に仕上げます。
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 小豆の選別と水浸し（12時間）</li>
                  <li>• 渋切り工程（3回）</li>
                  <li>• 火加減調整による炊き上げ</li>
                  <li>• 裏ごしによる滑らか仕上げ</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} className="md:order-1">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="餡作りの様子" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl text-amber-800 mb-6">3. 成形・装飾</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  季節感を表現するため、職人が一つ一つ手作業で成形し、
                  繊細な装飾を施します。色合いや形状にこだわり、
                  見た目にも美しい和菓子に仕上げます。
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 季節に合わせた色付け</li>
                  <li>• 専用道具による細工</li>
                  <li>• 自然の美しさの表現</li>
                  <li>• 最終検品による品質確認</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1609558546186-46b663a9aff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwY3JhZnRzcGVyc29ufGVufDF8fHx8MTc1OTEzNTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="和菓子職人の手作業" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 品質管理 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">品質管理</h2>
            <p className="text-lg text-gray-600">安全で美味しい和菓子をお届けするための取り組み</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">検</span>
              </div>
              <h3 className="text-lg text-amber-800 mb-3">原材料検査</h3>
              <p className="text-gray-600 text-sm">
                入荷時の品質検査と
                保管環境の徹底管理
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">衛</span>
              </div>
              <h3 className="text-lg text-amber-800 mb-3">衛生管理</h3>
              <p className="text-gray-600 text-sm">
                HACCP対応の
                衛生管理システム
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">温</span>
              </div>
              <h3 className="text-lg text-amber-800 mb-3">温度管理</h3>
              <p className="text-gray-600 text-sm">
                製造から配送まで
                一貫した温度管理
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">検</span>
              </div>
              <h3 className="text-lg text-amber-800 mb-3">最終検品</h3>
              <p className="text-gray-600 text-sm">
                出荷前の厳格な
                品質検査体制
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 技術継承 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">技術継承への取り組み</h2>
            <p className="text-lg text-gray-600">伝統技術を次世代へ受け継ぐための教育・研修制度</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl text-amber-800 mb-4">職人研修制度</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  新入社員から熟練職人まで、段階的な技術習得プログラムを用意。
                  基礎技術から季節菓子の高度な技法まで、体系的に学べる環境を整えています。
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• 基礎研修（6ヶ月）</li>
                  <li>• 中級技術研修（1年）</li>
                  <li>• 上級職人認定制度</li>
                  <li>• 外部講師による特別講習</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl text-amber-800 mb-4">技術記録の保存</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  百五十年の技術を文書化・映像化して保存。
                  伝統技法の詳細な記録により、確実な技術継承を実現しています。
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• 技法マニュアルの整備</li>
                  <li>• 製造工程の映像記録</li>
                  <li>• レシピの標準化</li>
                  <li>• 季節菓子カレンダー</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Business;