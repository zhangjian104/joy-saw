import { resources } from 'cc';

// 资源加载函数封装
export function resourcesLoad(path, type) {
  return new Promise((resolve, reject) => {
    resources.load(path, type, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}
