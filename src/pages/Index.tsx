import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const collections = [
    { 
      id: 1, 
      name: 'Classique', 
      description: 'Классическая коллекция',
      price: '1 250 000 ₽',
      image: 'https://cdn.poehali.dev/files/813c2a2f-e122-4851-95c9-280e0b5641bf.png'
    },
    { 
      id: 2, 
      name: 'Prestige', 
      description: 'Престижная серия',
      price: '2 890 000 ₽',
      image: 'https://cdn.poehali.dev/files/6841a48f-f562-49c7-84d4-52c888d1e495.png'
    },
    { 
      id: 3, 
      name: 'Heritage', 
      description: 'Наследие мастеров',
      price: '3 450 000 ₽',
      image: 'https://cdn.poehali.dev/files/7ea2564a-d818-49f2-a794-22c252eea698.png'
    },
  ];

  const catalogItems = [
    { id: 1, name: 'Royal Eclipse', collection: 'Classique', price: '1 250 000 ₽', image: 'https://cdn.poehali.dev/files/813c2a2f-e122-4851-95c9-280e0b5641bf.png' },
    { id: 2, name: 'Grand Prestige', collection: 'Prestige', price: '2 890 000 ₽', image: 'https://cdn.poehali.dev/files/6841a48f-f562-49c7-84d4-52c888d1e495.png' },
    { id: 3, name: 'Heritage Gold', collection: 'Heritage', price: '3 450 000 ₽', image: 'https://cdn.poehali.dev/files/7ea2564a-d818-49f2-a794-22c252eea698.png' },
    { id: 4, name: 'Platinum Elite', collection: 'Prestige', price: '4 120 000 ₽', image: 'https://cdn.poehali.dev/files/a19965ef-5185-4f09-a5ef-35bc56e0ca98.png' },
    { id: 5, name: 'Eternal Elegance', collection: 'Classique', price: '1 890 000 ₽', image: 'https://cdn.poehali.dev/files/3b94cea1-ca7e-49f5-87b1-fe51a9af4f9c.png' },
    { id: 6, name: 'Diamond Infinity', collection: 'Heritage', price: '5 200 000 ₽', image: 'https://cdn.poehali.dev/files/813c2a2f-e122-4851-95c9-280e0b5641bf.png' },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wider">CHRONOS</h1>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'catalog', 'collections', 'about', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm tracking-wide transition-colors hover:text-gold ${
                    activeSection === section ? 'text-gold font-medium' : 'text-black'
                  }`}
                >
                  {section === 'home' && 'ГЛАВНАЯ'}
                  {section === 'catalog' && 'КАТАЛОГ'}
                  {section === 'collections' && 'КОЛЛЕКЦИИ'}
                  {section === 'about' && 'О БРЕНДЕ'}
                  {section === 'delivery' && 'ДОСТАВКА'}
                  {section === 'contacts' && 'КОНТАКТЫ'}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-gray-900">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center px-6 animate-fade-in">
            <h2 className="md:text-8xl mb-6 tracking-wider mx-0 text-8xl font-thin text-[#ffffff]">RUFM&STYLE</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">Эксклюзивные ювелирные часы на ваш вкус</p>
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-black font-medium px-12 py-6 text-lg tracking-wider"
              onClick={() => scrollToSection('catalog')}
            >
              СМОТРЕТЬ КАТАЛОГ
            </Button>
          </div>
        </section>

        <section id="collections" className="py-24 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl text-center mb-4 font-light tracking-wider">КОЛЛЕКЦИИ</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Избранные серии мастеров</p>
            <div className="grid md:grid-cols-3 gap-12">
              {collections.map((collection, index) => (
                <Card 
                  key={collection.id} 
                  className="group overflow-hidden border-0 bg-muted cursor-pointer transition-all hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-3xl mb-2 font-light tracking-wide">{collection.name}</h3>
                    <p className="text-gray-600 mb-4">{collection.description}</p>
                    <p className="text-2xl text-gold font-light">от {collection.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-24 px-6 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl text-center mb-4 font-light tracking-wider">КАТАЛОГ</h2>
            <p className="text-center text-gray-600 mb-16 text-lg">Премиальные модели</p>
            <div className="grid md:grid-cols-3 gap-8">
              {catalogItems.map((item, index) => (
                <Card 
                  key={item.id}
                  className="group overflow-hidden border-0 bg-white cursor-pointer transition-all hover:shadow-2xl animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1 tracking-wider">{item.collection}</p>
                    <h3 className="text-2xl mb-3 font-light">{item.name}</h3>
                    <p className="text-xl text-gold font-light">{item.price}</p>
                    <Button 
                      className="w-full mt-4 bg-black hover:bg-black/90 text-white"
                      onClick={() => {}}
                    >
                      ПОДРОБНЕЕ
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl mb-8 font-light tracking-wider">О БРЕНДЕ</h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-300 font-light">
              CHRONOS — это воплощение швейцарского часового искусства, объединяющее вековые традиции 
              мастерства с современными технологиями. Каждые часы создаются вручную лучшими мастерами 
              из благородных металлов и драгоценных камней.
            </p>
            <p className="text-xl leading-relaxed text-gray-300 font-light">
              Наши изделия — это не просто часы, это произведения искусства, передающиеся из поколения 
              в поколение. Каждая деталь продумана до совершенства, каждый механизм — это результат 
              сотен часов кропотливой работы.
            </p>
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="text-center">
                <div className="text-5xl mb-4 text-gold">150+</div>
                <p className="text-gray-400 tracking-wide">ЛЕТ ОПЫТА</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4 text-gold">1200+</div>
                <p className="text-gray-400 tracking-wide">МОДЕЛЕЙ</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4 text-gold">50+</div>
                <p className="text-gray-400 tracking-wide">СТРАН</p>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-6xl text-center mb-16 font-light tracking-wider">ДОСТАВКА</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8 border-black/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <Icon name="Package" size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 font-light">Бесплатная доставка</h3>
                    <p className="text-gray-600 leading-relaxed">
                      По Москве в течение 24 часов. По России и миру — курьером в индивидуальной упаковке 
                      с сертификатом подлинности.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-black/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <Icon name="Shield" size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 font-light">Гарантия качества</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Пожизненная гарантия от производителя. Бесплатное сервисное обслуживание 
                      в наших центрах по всему миру.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-black/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <Icon name="CreditCard" size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 font-light">Оплата</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Принимаем все виды платежей: наличные, банковские карты, банковский перевод. 
                      Возможна рассрочка без переплаты.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-black/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-full">
                    <Icon name="Gift" size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 font-light">Упаковка</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Роскошная фирменная упаковка из натуральной кожи с золотым тиснением. 
                      Идеально для подарка.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 px-6 bg-muted">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-6xl text-center mb-16 font-light tracking-wider">КОНТАКТЫ</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl mb-6 font-light">Флагманский бутик</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="mt-1 text-gold" />
                    <p className="text-gray-700">Москва, Кутузовский проспект, 2/1с1</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="mt-1 text-gold" />
                    <p className="text-gray-700">+7 (495) 123-45-67</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="mt-1 text-gold" />
                    <p className="text-gray-700">info@chronos.ru</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="mt-1 text-gold" />
                    <p className="text-gray-700">Ежедневно: 10:00 — 21:00</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl mb-6 font-light">Свяжитесь с нами</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-gold transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-gold transition-colors"
                  />
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 border border-black/20 bg-white focus:outline-none focus:border-gold transition-colors resize-none"
                  ></textarea>
                  <Button className="w-full bg-black hover:bg-black/90 text-white py-6">
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl mb-4 font-light tracking-wider">CHRONOS</h2>
          <p className="text-gray-400 mb-6">Искусство времени с 1875 года</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024 CHRONOS. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;