import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 z-0">
        {/* 主渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-red-500"></div>
        
        {/* 装饰性渐变层 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 via-transparent to-red-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-300/20 via-transparent to-amber-400/20"></div>
        
        {/* 纹理效果 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg mb-8 border border-white/20 animate-float">
            <span className="text-2xl animate-pulse">🍳</span>
            <span className="text-sm font-bold text-gray-800">100% Healthy Cooking</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
            <span className="block text-white drop-shadow-2xl animate-float" style={{animationDelay: '0.5s'}}>Delicious Air Fryer</span>
            <span className="block mt-2 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent drop-shadow-lg animate-float" style={{animationDelay: '1s'}}>
              Recipes Made Easy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Transform your meals with healthier, crispier, and faster cooking. 
            <span className="font-bold text-yellow-100 drop-shadow-md"> Over 200 tested recipes</span> waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link 
              href="/recipes" 
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 animate-pulse-glow"
            >
              <span>Explore Recipes</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-3 bg-white/95 hover:bg-white text-gray-900 font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Calculator</span>
            </Link>
          </div>
          
          {/* 统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">7+</div>
              <div className="text-gray-800 font-bold text-lg">Recipes</div>
            </div>
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">9</div>
              <div className="text-gray-800 font-bold text-lg">Categories</div>
            </div>
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">75%</div>
              <div className="text-gray-800 font-bold text-lg">Less Oil</div>
            </div>
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-white/30">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-3">30%</div>
              <div className="text-gray-800 font-bold text-lg">Faster</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

