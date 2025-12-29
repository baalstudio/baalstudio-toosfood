const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  // Products
  { url: 'https://www.toos-food.com/wp-content/uploads/35t.png', name: 'product-1.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/31t.png', name: 'product-2.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/30t.png', name: 'product-3.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/29t.png', name: 'product-4.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/28t.png', name: 'product-5.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/27t.png', name: 'product-6.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/26t.png', name: 'product-7.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/25t.png', name: 'product-8.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/3d-Toos.png', name: 'product-9.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/2.png', name: 'product-10.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/5.png', name: 'product-11.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/1.png', name: 'product-12.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/14t-1.png', name: 'product-13.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/15tpng.png', name: 'product-14.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/000000.png', name: 'product-15.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/2t-2.png', name: 'product-16.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/13t-1.png', name: 'product-17.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/12t-1.png', name: 'product-18.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/11tpng.png', name: 'product-19.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/10.png', name: 'product-20.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/14t.png', name: 'product-21.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/34tpng.png', name: 'product-22.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/12t.png', name: 'product-23.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/13t.png', name: 'product-24.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/33t.png', name: 'product-25.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/32t.png', name: 'product-26.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/16t.png', name: 'product-27.png' },
  { url: 'https://www.toos-food.com/wp-content/uploads/17t.png', name: 'product-28.png' },
  
  // Blog Posts
  { url: 'https://images.unsplash.com/photo-1593001874117-c99c6efec8bd?q=80&w=800&auto=format&fit=crop', name: 'blog-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1598511726623-d219904a0f18?q=80&w=800&auto=format&fit=crop', name: 'blog-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?q=80&w=800&auto=format&fit=crop', name: 'blog-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop', name: 'blog-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', name: 'blog-5.jpg' },
  { url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop', name: 'blog-6.jpg' }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
};

async function run() {
  const dir = path.join(__dirname, 'public', 'img');
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const img of images) {
    try {
      await download(img.url, path.join(dir, img.name));
    } catch (e) {
      // Continue even if one fails
    }
  }
}

run();
