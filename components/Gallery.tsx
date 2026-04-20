'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Upload, Plus } from 'lucide-react';

const initialGalleryImages = [
  { id: '1', src: 'https://loremflickr.com/800/600/indian,dentist,patient?lock=1', alt: 'Advanced Dental Checkup', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: '2', src: 'https://loremflickr.com/800/600/indian,dentist,patient?lock=2', alt: 'Precision Equipment', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: '3', src: 'https://loremflickr.com/800/600/indian,dentist,patient?lock=3', alt: 'Dental Treatment', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: '4', src: 'https://loremflickr.com/800/600/indian,dentist,patient?lock=4', alt: 'State-of-the-art Surgery Room', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: '5', src: 'https://loremflickr.com/800/600/indian,dentist,patient?lock=5', alt: 'Patient Consultation', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
];

export default function Gallery() {
  const [images, setImages] = useState(initialGalleryImages);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file, index) => {
      const url = URL.createObjectURL(file);
      return {
        id: `uploaded-${Date.now()}-${index}`,
        src: url,
        alt: file.name.split('.')[0] || 'Uploaded dental photo',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
      };
    });

    setImages((prev) => [...newImages, ...prev]);
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
              Clinic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Gallery</span>
            </h2>
            <p className="text-gray-400 font-light">Explore our state-of-the-art facility and successful transformations.</p>
          </div>
          
          <div>
            <label className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-red-900/20">
              <Upload className="w-5 h-5" />
              <span>Upload Photos</span>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                className="hidden" 
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index < 5 ? index * 0.1 : 0 }}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.colSpan} ${image.rowSpan} border border-white/10`}
              >
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  unoptimized={image.src.startsWith('blob:')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <h4 className="text-white font-outfit text-lg font-bold capitalize truncate">{image.alt}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
