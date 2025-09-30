import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('seasonal');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'seasonal', name: '季節の生菓子', description: '四季の美しさを表現した上生菓子' },
    { id: 'traditional', name: '伝統菓子', description: '創業以来受け継がれる定番商品' },
    { id: 'gift', name: '贈答品', description: '特別な日にふさわしい詰め合わせ' },
    { id: 'tea', name: '茶席菓子', description: '茶道に合わせた特別な菓子' }
  ];

  const products = {
    seasonal: [
      {
        name: '春桜',
        description: '桜の花びらを模した繊細な生菓子。薄紅色の美しい仕上がり。',
        price: '¥420',
        season: '3月〜5月',
        image: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwd2FnYXNoaSUyMHN3ZWV0c3xlbnwxfHx8fDE3NTkxMzUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '夏涼み',
        description: '透明感のある葛を使用し、涼やかな印象の夏限定菓子。',
        price: '¥380',
        season: '6月〜8月',
        image: 'https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '秋紅葉',
        description: '紅葉の美しさを表現した、深い色合いの季節菓子。',
        price: '¥400',
        season: '9月〜11月',
        image: 'https://images.unsplash.com/photo-1709515522019-4794fd3568eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRyYWRpdGlvbmFsJTIwY29uZmVjdGlvbmVyeXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '冬椿',
        description: '椿の花をモチーフにした、上品な冬の和菓子。',
        price: '¥450',
        season: '12月〜2月',
        image: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwd2FnYXNoaSUyMHN3ZWV0c3xlbnwxfHx8fDE3NTkxMzUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    traditional: [
      {
        name: '桜和堂どら焼き',
        description: '創業以来の伝統レシピで作る、自慢のどら焼き。',
        price: '¥280',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1709515522019-4794fd3568eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRyYWRpdGlvbmFsJTIwY29uZmVjdGlvbmVyeXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '京風最中',
        description: '香ばしい最中種に、なめらかな餡をたっぷりと。',
        price: '¥320',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '栗きんとん',
        description: '厳選された栗を使用した、秋の代表的な和菓子。',
        price: '¥480',
        season: '9月〜12月',
        image: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwd2FnYXNoaSUyMHN3ZWV0c3xlbnwxfHx8fDE3NTkxMzUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    gift: [
      {
        name: '雅の調べ',
        description: '当店の代表的な菓子を詰め合わせた贈答用セット。',
        price: '¥2,800',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1709515522019-4794fd3568eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHRyYWRpdGlvbmFsJTIwY29uZmVjdGlvbmVyeXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '季節の彩り',
        description: '季節の生菓子を美しく詰め合わせたギフトボックス。',
        price: '¥3,500',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    tea: [
      {
        name: '茶會菓子',
        description: '茶道の席に適した、品格ある上生菓子。',
        price: '¥500',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwd2FnYXNoaSUyMHN3ZWV0c3xlbnwxfHx8fDE3NTkxMzUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        name: '薄茶用干菓子',
        description: '薄茶に合わせた、上品な甘さの干菓子セット。',
        price: '¥1,200',
        season: '通年',
        image: 'https://images.unsplash.com/photo-1557735567-d1b80e463789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYSUyMGNlcmVtb255JTIwd2FnYXNoaXxlbnwxfHx8fDE3NTkxMzUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
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
            商品紹介
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            四季の美しさを表現した伝統の和菓子から、
            特別な日を彩る贈答品まで幅広くご用意しております。
          </motion.p>
        </div>
      </motion.section>

      {/* カテゴリー選択 */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs mt-1 opacity-80">{category.description}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 商品一覧 */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        key={selectedCategory}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {products[selectedCategory as keyof typeof products].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  shadow: "0 20px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.season}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-amber-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-amber-600">{product.price}</span>
                    <motion.button 
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      詳細を見る
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 季節カレンダー */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">季節の和菓子カレンダー</h2>
            <p className="text-lg text-gray-600">一年を通して楽しめる季節限定商品のご案内</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                season: '春',
                months: '3月 - 5月',
                items: ['桜餅', '草餅', '花見団子', '若鮎'],
                color: 'from-pink-100 to-rose-100',
                icon: '🌸'
              },
              {
                season: '夏',
                months: '6月 - 8月',
                items: ['水羊羹', 'くず餅', '氷室饅頭', '涼菓'],
                color: 'from-blue-100 to-cyan-100',
                icon: '🌊'
              },
              {
                season: '秋',
                months: '9月 - 11月',
                items: ['栗きんとん', '柿羊羹', '紅葉饅頭', '菊菓子'],
                color: 'from-orange-100 to-red-100',
                icon: '🍁'
              },
              {
                season: '冬',
                months: '12月 - 2月',
                items: ['花びら餅', '椿餅', '雪見大福', '寒梅'],
                color: 'from-gray-100 to-blue-100',
                icon: '❄️'
              }
            ].map((season, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${season.color} p-6 rounded-lg shadow-lg text-center`}
                variants={fadeInUp}
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="text-4xl mb-4">{season.icon}</div>
                <h3 className="text-2xl text-amber-800 mb-2">{season.season}</h3>
                <p className="text-amber-600 mb-4">{season.months}</p>
                <ul className="space-y-2 text-gray-700">
                  {season.items.map((item, idx) => (
                    <li key={idx} className="text-sm">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 注文・配送情報 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">ご注文・配送について</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">店</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">店頭販売</h3>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>営業時間：9:00-18:00</p>
                <p>定休日：水曜日</p>
                <p>当日の生菓子もご用意</p>
                <p>ギフト包装承ります</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">通</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">通信販売</h3>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>全国配送対応</p>
                <p>冷蔵・冷凍便対応</p>
                <p>配送料：地域により異なる</p>
                <p>オンラインサイトで注文</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">予</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">予約注文</h3>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>季節限定商品の予約</p>
                <p>大量注文承ります</p>
                <p>3日前までの予約推奨</p>
                <p>お電話でもお受けします</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <motion.button 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              オンラインストアで注文する
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;