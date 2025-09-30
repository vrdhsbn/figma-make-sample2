import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Careers = () => {
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
            採用情報
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            伝統を未来へと繋ぐ、情熱あふれる仲間を募集しています。
            あなたも桜和堂の一員として、和菓子作りの世界で活躍しませんか。
          </motion.p>
        </div>
      </motion.section>

      {/* 会社の魅力 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">桜和堂で働く魅力</h2>
            <p className="text-lg text-gray-600">百五十年の伝統を受け継ぎながら、新しい挑戦ができる職場です</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">技</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">伝統技術の習得</h3>
              <p className="text-gray-600 leading-relaxed">
                百五十年受け継がれてきた職人技術を
                一から丁寧に学ぶことができます。
                熟練の職人が直接指導いたします。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">成</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">成長支援制度</h3>
              <p className="text-gray-600 leading-relaxed">
                個人の成長に合わせた研修制度と
                キャリアアップ支援制度を用意。
                全国の展示会や勉強会への参加も支援します。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">創</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">創造の喜び</h3>
              <p className="text-gray-600 leading-relaxed">
                季節の美しさを表現した和菓子作りを通じて、
                お客様に感動をお届けする
                創造的な仕事に携わることができます。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">環</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">働きやすい環境</h3>
              <p className="text-gray-600 leading-relaxed">
                充実した福利厚生と働きやすい職場環境。
                仕事とプライベートの両立を
                しっかりとサポートいたします。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">絆</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">チームワーク</h3>
              <p className="text-gray-600 leading-relaxed">
                アットホームな職場で、
                先輩・同僚との強い絆を築きながら
                共に成長していける環境です。
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl">誇</span>
              </div>
              <h3 className="text-xl text-amber-800 mb-4">誇りある仕事</h3>
              <p className="text-gray-600 leading-relaxed">
                日本の伝統文化である和菓子作りに携わり、
                文化の継承者として
                社会に貢献できる誇りある仕事です。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 募集職種 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">募集職種</h2>
            <p className="text-lg text-gray-600">現在募集中の職種をご紹介いたします</p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-amber-800 mb-2">和菓子職人</h3>
                  <p className="text-amber-600">正社員 / 未経験歓迎</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm">積極採用中</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">仕事内容</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 季節の生菓子製造</li>
                    <li>• 伝統菓子の製造</li>
                    <li>• 商品の品質管理</li>
                    <li>• 新商品の企画・開発</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">応募資格</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 高校卒業以上</li>
                    <li>• 未経験歓迎（研修制度充実）</li>
                    <li>• 手作業を集中して行える方</li>
                    <li>• 日本文化に興味がある方</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>給与：月給18万円〜30万円</span>
                  <span>勤務時間：8:00-17:00</span>
                  <span>休日：週休2日制</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-amber-800 mb-2">販売スタッフ</h3>
                  <p className="text-amber-600">正社員 / パート</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">募集中</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">仕事内容</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 店頭での接客・販売</li>
                    <li>• 商品説明・提案</li>
                    <li>• ギフト包装</li>
                    <li>• レジ業務・店舗管理</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">応募資格</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 高校卒業以上</li>
                    <li>• 接客経験者優遇</li>
                    <li>• 明るく丁寧な対応ができる方</li>
                    <li>• 和菓子に興味がある方</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>給与：時給950円〜1,200円</span>
                  <span>勤務時間：9:00-18:00（シフト制）</span>
                  <span>休日：月8日以上</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-amber-800 mb-2">商品企画・マーケティング</h3>
                  <p className="text-amber-600">正社員 / 経験者優遇</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">募集中</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">仕事内容</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 新商品の企画・開発</li>
                    <li>• マーケティング戦略立案</li>
                    <li>• SNS・Web運営</li>
                    <li>• イベント企画・運営</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 mb-3">応募資格</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 大学卒業以上</li>
                    <li>• マーケティング経験3年以上</li>
                    <li>• PCスキル（Office、デザインソフト）</li>
                    <li>• 企画力・発想力に自信がある方</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>給与：月給25万円〜40万円</span>
                  <span>勤務時間：9:00-18:00</span>
                  <span>休日：完全週休2日制</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 福利厚生・待遇 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">福利厚生・待遇</h2>
            <p className="text-lg text-gray-600">働く皆様を全力でサポートいたします</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">保険・年金</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 健康保険</li>
                <li>• 厚生年金</li>
                <li>• 雇用保険</li>
                <li>• 労災保険</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">休暇制度</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 有給休暇</li>
                <li>• 夏季休暇</li>
                <li>• 年末年始休暇</li>
                <li>• 慶弔休暇</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">手当・支援</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 交通費全額支給</li>
                <li>• 住宅手当</li>
                <li>• 資格取得支援</li>
                <li>• 研修制度</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">職場環境</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 制服貸与</li>
                <li>• 駐車場完備</li>
                <li>• 社員食堂</li>
                <li>• 健康診断</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">特別制度</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 社員割引</li>
                <li>• 忘年会・歓送迎会</li>
                <li>• 社員旅行</li>
                <li>• 表彰制度</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg shadow-lg text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg text-amber-800 mb-4">キャリア支援</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 昇進・昇格制度</li>
                <li>• 職人技能認定</li>
                <li>• 展示会参加</li>
                <li>• 技術向上支援</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 社員の声 */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-amber-50 to-orange-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">社員の声</h2>
            <p className="text-lg text-gray-600">実際に働く社員からのメッセージ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center mb-6">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1609558546186-46b663a9aff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwY3JhZnRzcGVyc29ufGVufDF8fHx8MTc1OTEzNTE5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="田中さん" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg text-amber-800">田中 美由紀</h3>
                  <p className="text-gray-600 text-sm">和菓子職人（入社3年目）</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「未経験で入社しましたが、先輩方が本当に優しく丁寧に教えてくださいました。
                毎日少しずつ技術が向上していくのを実感でき、お客様に喜んでもらえる和菓子を
                作れるようになった時の感動は今でも忘れられません。」
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-lg">佐</span>
                </div>
                <div>
                  <h3 className="text-lg text-amber-800">佐藤 健太</h3>
                  <p className="text-gray-600 text-sm">販売スタッフ（入社2年目）</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                「お客様との会話の中で、商品の背景や季節の意味をお伝えできることに
                やりがいを感じています。特に、贈り物を選ばれるお客様に喜んでいただけた時は
                本当に嬉しいです。職場の雰囲気も良く、毎日楽しく働いています。」
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 応募方法 */}
      <motion.section 
        className="py-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl text-amber-800 mb-6">応募方法</h2>
            <p className="text-lg text-gray-600">ご応募をお待ちしております</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-amber-800 mb-6">応募書類</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                      履歴書（写真貼付）
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                      職務経歴書
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                      志望動機書（任意）
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-amber-800 mb-6">選考フロー</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                      書類選考
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                      一次面接
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                      最終面接・職場見学
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-amber-200">
                <div className="text-center space-y-4">
                  <div className="text-gray-700">
                    <p className="mb-2">応募先：株式会社桜和堂 人事部</p>
                    <p className="mb-2">〒602-8031 京都市上京区室町通丸太町上ル</p>
                    <p className="mb-2">TEL: 075-123-4567 / Email: recruit@sakurawado.co.jp</p>
                  </div>
                  
                  <motion.button 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    応募書類を送る
                  </motion.button>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    ご不明な点がございましたら、お気軽にお電話ください。<br />
                    受付時間：平日 9:00-17:00
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;