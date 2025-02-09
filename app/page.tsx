'use client';

import { useEffect, useState } from 'react';
import { Users, AlertTriangle } from 'lucide-react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=2000&q=80', // Pizza
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2000&q=80', // Healthy breakfast
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=2000&q=80', // Pancakes
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=2000&q=80', // Burger
];

const teamMembers = [
  { 
    name: 'もふにゃん', 
    role: 'メンバー',
    image: 'https://cdn.discordapp.com/avatars/1230093785224970334/52808a6fbb711693525a1adc5e6133f9.webp?size=1024&format=webp',
    color: 'rgb(240, 142, 30)'
  },
  { 
    name: 'まぐ', 
    role: 'メンバー',
    image: 'https://cdn.discordapp.com/avatars/1242825770708238387/ad4a8d012971ecece38d77cd597066d0.webp?size=1024&format=webp',
    color: 'rgb(59, 130, 246)'
  },
  { 
    name: 'ちるたな', 
    role: '創設者',
    image: 'https://cdn.discordapp.com/avatars/1160008113710178374/01a2efa9efa6efe98cdc73e3ec4193ac.webp?size=1024&format=webp',
    color: 'rgb(228, 197, 61)'
  },
  { 
    name: 'ゆめっち', 
    role: 'メンバー',
    image: 'https://cdn.discordapp.com/avatars/1150088522359910562/92e4b21f8aecb93276c00ba427dde39f.webp?size=1024&format=webp',
    color: 'rgb(51, 82, 255)'
  },
];

const missionItems = [
  { 
    title: '監視活動', 
    description: 'SNSでの飯テロ投稿を24時間体制で監視し、対策を講じています。',
    color: 'rgb(239, 68, 68)'
  },
  { 
    title: '啓発活動', 
    description: '飯テロの危険性について、広く社会に周知する活動を行っています。',
    color: 'rgb(234, 179, 8)'
  },
  { 
    title: '支援活動', 
    description: '飯テロの被害に遭われた方々へのサポート体制を整えています。',
    color: 'rgb(34, 197, 94)'
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageTransform, setImageTransform] = useState('');

  useEffect(() => {
    const transforms = [
      'scale(1.1) rotate(5deg)',
      'scale(1.1) rotate(-5deg)',
      'scale(1.1) translateX(20px)',
      'scale(1.1) translateX(-20px)',
    ];

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      setImageTransform(transforms[Math.floor(Math.random() * transforms.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <div className="fixed inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 w-full h-full transition-all duration-2000"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentImageIndex ? 0.2 : 0,
              transform: index === currentImageIndex ? imageTransform : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen bg-black/70 text-white px-4">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-red-500 animate-bounce" />
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">飯テロ撲滅委員会</h1>
            <p className="text-xl mb-8 animate-slide-up">
              私たちは、SNSにおける過度な食事写真の投稿による「飯テロ」から、
              人々の平和な生活を守ることを使命としています。
            </p>
            <div className="animate-pulse">
              <p className="text-2xl font-semibold text-red-400">
                ⚠️ 飯テロの被害者数 ⚠️
              </p>
              <p className="text-4xl font-bold">1,234,567 人</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-black/80 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold mb-4">委員会メンバー</h2>
              <p className="text-gray-400">
                飯テロ撲滅に向けて日々活動している精鋭たち
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-gray-900/80 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 group"
                  style={{
                    '--hover-color': member.color
                  } as any}
                >
                  <div 
                    className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-[var(--hover-color)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center group-hover:text-[var(--hover-color)] transition-colors">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-black/90">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">私たちの使命</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionItems.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 bg-gray-900/80 group"
                  style={{
                    '--hover-color': item.color
                  } as any}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[var(--hover-color)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-[var(--hover-color)] transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/95 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 飯テロ撲滅委員会 All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}