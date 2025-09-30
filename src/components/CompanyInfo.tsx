import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const CompanyInfo = () => {
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
            企業情報
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            明治十年創業、百五十年の歴史を持つ京都の老舗和菓子店として、
            伝統を守りながら新しい時代へと歩み続けております。
          </motion.p>
        </div>
      </motion.section>

      {/* 会社概要 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">会社概要</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">会社名</span>
                      <span className="col-span-2">株式会社桜和堂</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">創業</span>
                      <span className="col-span-2">明治十年（1877年）</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">設立</span>
                      <span className="col-span-2">昭和二十五年（1950年）</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">代表者</span>
                      <span className="col-span-2">代表取締役社長 桜井 雅夫</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">資本金</span>
                      <span className="col-span-2">3,000万円</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">従業員数</span>
                      <span className="col-span-2">45名</span>
                    </div>
                  </div>
                  <div className="border-b border-amber-200 pb-4">
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">本社所在地</span>
                      <span className="col-span-2">〒602-8031<br />京都市上京区室町通丸太町上ル</span>
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-4">
                      <span className="text-amber-700">事業内容</span>
                      <span className="col-span-2">和菓子の製造・販売<br />茶席菓子の製造<br />季節菓子の企画・開発</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1673499415085-6aa9f9927d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc1OTEzNTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="桜和堂店舗外観" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 沿革 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">沿革</h2>
            <p className="text-lg text-gray-600">百五十年の歩みをご紹介いたします</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300"></div>
              
              {[
                {
                  year: "明治10年",
                  event: "初代桜井徳右衛門が京都室町にて和菓子店を創業"
                },
                {
                  year: "大正5年",
                  event: "二代目桜井義雄が事業を継承、茶席菓子の製造を本格化"
                },
                {
                  year: "昭和25年",
                  event: "株式会社桜和堂として法人化"
                },
                {
                  year: "昭和60年",
                  event: "三代目桜井康夫が代表取締役就任、工場を拡張"
                },
                {
                  year: "平成15年",
                  event: "オンラインショップを開設、全国への配送を開始"
                },
                {
                  year: "平成28年",
                  event: "四代目桜井雅夫が代表取締役就任"
                },
                {
                  year: "令和2年",
                  event: "創業140周年記念商品「雅の調べ」を発売"
                },
                {
                  year: "令和6年",
                  event: "新工場稼働開始、生産能力を2倍に拡大"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-center mb-12"
                  variants={fadeInUp}
                >
                  <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-20 bg-white p-6 rounded-lg shadow-lg w-full">
                    <div className="text-amber-700 mb-2">{item.year}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 経営理念 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">経営理念</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">伝</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">伝統の継承</h3>
              <p className="text-gray-600 leading-relaxed">
                百五十年の歴史で培われた伝統の技法と心を、
                次の世代へと確実に受け継いでまいります。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">革</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">革新への挑戦</h3>
              <p className="text-gray-600 leading-relaxed">
                伝統を守りながらも、時代のニーズに応える
                新しい和菓子の創造に挑戦し続けます。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">心</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">真心のおもてなし</h3>
              <p className="text-gray-600 leading-relaxed">
                お客様一人一人への感謝の気持ちを込めて、
                心からのおもてなしを大切にいたします。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 代表挨拶 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">代表挨拶</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1609558546186-46b663a9aff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwY3JhZnRzcGVyc29ufGVufDF8fHx8MTc1OTEzNTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="代表取締役社長 桜井雅夫" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div>
                <h3 className="text-2xl text-amber-800 mb-2">代表取締役社長</h3>
                <h4 className="text-xl text-gray-700 mb-6">桜井 雅夫</h4>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  平素より桜和堂をご愛顧いただき、誠にありがとうございます。
                  明治十年の創業から百五十年、四代にわたって受け継がれてきた
                  伝統の技法と心を大切に、日々和菓子作りに取り組んでおります。
                </p>
                <p>
                  京都の美しい四季を表現した和菓子を通じて、
                  お客様に季節の移ろいと日本の文化の素晴らしさを
                  お伝えできるよう努めてまいります。
                </p>
                <p>
                  これからも伝統を守りながら、
                  新しい時代のニーズにお応えできる和菓子店として、
                  皆様に愛され続ける存在であり続けたいと思います。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CompanyInfo;