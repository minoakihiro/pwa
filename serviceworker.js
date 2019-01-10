//�L���b�V�����i�����manekineko �Ƃ����ŗL�̖��O�j
var cacheName = 'manekineko';

//�L���b�V���������t�@�C���̃��X�g(�����3��ށBHTML�{�́Ajs�t�@�C���ACSS�t�@�C�����Ώ�)
var filesToCache = [
   'index.html',
   'jquery.js',
   'style.css',
];

//�u���E�U�ւ̃C���X�g�[�����ɃL���V���������t�@�C����ǉ�����
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
});


//ServiceWorker���L���ɂȂ�Ƃ�cacheName���������L���b�V�����폜����
self.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key !== cacheName){
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


//�L���b�V��������ΌĂяo���A�Ȃ��ꍇ�l�b�g���[�N������ɍs��
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});